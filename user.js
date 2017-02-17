import { Plug } from 'mindtouch-http.js/plug.js';
import { Settings } from './lib/settings.js';
import { utility } from './lib/utility.js';
import { platform } from './lib/platform.js';
import { modelParser } from './lib/modelParser.js';
import { userModel } from './models/user.model.js';
import { pageModel } from './models/page.model.js';
import { userListModel } from './models/userList.model.js';
import { apiErrorModel } from './models/apiError.model.js';

/**
 * A class for managing a MindTouch user.
 */
export class User {

    /**
     * Construct a new User object.
     * @param {Number|String} [id='current'] - The user's numeric ID or username.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */
    constructor(id = 'current', settings = new Settings()) {
        this._id = utility.getResourceId(id, 'current');
        this._plug = new Plug(settings.host, settings.plugConfig).at('@api', 'deki', 'users', this._id);
        this._errorParser = modelParser.createParser(apiErrorModel);
    }

    /**
     * Get the user information.
     * @param {Object} params - The various params that provide context to the request
     * @param {Array} params.excludes - elements to exclude from response (ex: ['groups', 'properties'])
     * @returns {Promise.<userModel>} - A Promise that, when resolved, returns a {@link userModel} containing the user information.
     */
    getInfo({ excludes = [] } = {}) {
        let userModelParser = modelParser.createParser(userModel);
        let plug = this._plug;
        if(Array.isArray(excludes) && excludes.length) {
            plug = plug.withParam('exclude', excludes.join());
        }
        return plug.get().then((r) => r.json()).then(userModelParser);
    }

    /**
     * Check one or more resources if given operation is allowed.
     * @param {Array} pageIds - An array of numeric page IDs to check if the operations specified in `options` are allowed.
     * @param {Object} [options] - An object that contains the parameters to direct the request.
     * @param {Number} [options.mask] - The permission bit mask required for the pages.
     * @param {Array} [options.operations=[]] - An array of operations to verify.
     * @param {Boolean} [options.verbose=true] - Return verbose information on permitted pages.
     * @param {Boolean} [options.invert=false] - Return filtered instead of allowed pages. If set to `true`, forces the `verbose` parameter to `false`.
     */
    checkAllowed(pageIds, options = {}) {
        if(!Array.isArray(pageIds)) {
            return Promise.reject(new Error('Invalid value supplied for the `pageIds` array.'));
        }
        if(options.operations) {
            if(!Array.isArray(options.operations)) {
                return Promise.reject(new Error('Invalid value supplied for the `options.operations` array.'));
            }
            options.operations = options.operations.join(',');
        }
        let requestXml = pageIds.map((id) => `<page id="${id}" />`).join('');
        requestXml = `<pages>${requestXml}</pages>`;
        return this._plug.at('allowed')
            .withParams(options)
            .post(requestXml, utility.xmlRequestType)
            .then((r) => r.json())
            .then(modelParser.createParser([ { field: 'page', name: 'pages', isArray: true, transform: pageModel } ]));
    }

    /**
     * Modify the user
     * @param {Object} options - An object that contains the user parameters to modify
     * @param {Boolean} [options.active] - Sets the user's "status" to "active" or "inactive".
     * @param {Boolean} [options.seated] - Sets whether or not the user is seated.
     * @param {String} [options.username] - Sets the user's username.
     * @param {String} [options.fullName] - Sets the user's full name (display name).
     * @param {String} [options.email] - Sets the user's email address.
     * @param {String} [options.language] - Sets the user's language.
     * @param {String} [options.timeZone] - Sets the user's time zone.
     */
    update(options) {
        let postData = '<user>';
        Object.entries(options).forEach(([ key, value ]) => {
            if(key === 'active') {
                postData += `<status>${value === true ? 'active' : 'inactive'}</status>`;
            } else if(key === 'seated') {
                postData += `<license.seat>${value}</license.seat>`;
            } else {
                const lowerKey = key.toLowerCase();
                postData += `<${lowerKey}>${value}</${lowerKey}>`;
            }
        });
        postData += '</user>';
        return this._plug.put(postData, utility.xmlRequestType)
            .catch((err) => Promise.reject(this._errorParser(err)))
            .then((r) => r.json())
            .then(modelParser.createParser(userModel));
    }
}

/**
 * A class for managing the users on a MindTouch site.
 */
export class UserManager {

    /**
     * Construct a new UserManager object.
     * @param {Settings} [settings] - The {@link Settings} information to use in construction. If not supplied, the default settings are used.
     */
    constructor(settings = new Settings()) {
        this._settings = settings;
        this._plug = new Plug(settings.host, settings.plugConfig).at('@api', 'deki', 'users');
    }

    /**
     * Get the currently signed-in user.
     * @param {Object} params - The various params that provide context to the request
     * @param {Array} params.excludes - elements to exclude from response (ex: ['groups', 'properties'])
     * @returns {Promise.<userModel>} - A Promise that, when resolved, returns a {@link userModel} containing the current user's information.
     */
    getCurrentUser({ excludes = [] } = {}) {
        let userModelParser = modelParser.createParser(userModel);
        let plug = this._plug;
        if(Array.isArray(excludes) && excludes.length) {
            plug = plug.withParam('exclude', excludes.join());
        }
        return plug.at('current').get().then((r) => r.json()).then(userModelParser);
    }

    /**
     * Get the currently signed-in user's activity id.
     * @returns {Promise.<String>} - A Promise that, when resolved, returns a string with the current user activity token.
     */
    getCurrentUserActivityToken() {
        return this._plug.at('current').withParam('exclude', [ 'groups', 'properties' ]).get().then((r) => {
            return Promise.all([
                r.json().then(modelParser.createParser(userModel)),
                new Promise((resolve, reject) => {
                    const sessionId = r.headers.get('X-Deki-Session');
                    if(sessionId !== null) {
                        resolve(sessionId);
                    } else {
                        reject(new Error('Could not fetch an X-Deki-Session HTTP header from the MindTouch API.'));
                    }
                })
            ]);
        }).then(([ user, sessionId ]) => {
            return `${user.id}:${sessionId}`;
        });
    }

    /**
     * Get all of the users.
     * @returns {Promise.<userListModel>} - A Promise that, when resolved, returns a {@link userListModel} containing the list of users.
     */
    getUsers() {
        let userListModelParser = modelParser.createParser(userListModel);
        return this._plug.get().then((r) => r.json()).then(userListModelParser);
    }

    /**
     * Get a listing of users filtered by the supplied constraints
     * @param {Object} constraints - The various constraints that can be used to filter the user listing.
     * @param {Number} constraints.groupid - Search for users in a specific group
     * @param {String} constraints.fullname - Search for users full name starting with supplied text.
     * @param {Boolean} constraints.active - Search for users by their active status
     * @param {Number} constraints.authprovider - Return users belonging to given authentication service id
     * @param {String} constraints.email - Search for users by name and email or part of a name and email
     * @param {Boolean} constraints.seated - Search for users with or without seats
     * @param {String} constraints.username - Search for users name starting with supplied text
     * @param {Number} constraints.roleid - Search for users of a specific role ID.
     * @param {Number} constraints.limit - Maximum number of items to retrieve. Actual maximum is capped by site setting
     * @param {String} constraints.format - Output format. Must be one of "autocomplete", "default" , or "verbose"
     * @returns {Promise.<userListModel>} - A Promise that, when resolved, returns a {@link userListModel} containing the list of found users.
     */
    searchUsers(constraints) {
        let userListModelParser = modelParser.createParser(userListModel);
        return this._plug.at('search').withParams(constraints).get().then((r) => r.json()).then(userListModelParser);
    }

    /**
     * Authenticate a user
     * @param {Object} options - The authentication options.
     * @param {String} options.method - Either 'GET' or 'POST' to direct the use of those forms of the API call.
     * @param {String} options.username - The username of the user to authenticate.
     * @param {String} options.password - The password of the user to authenticate.
     */
    authenticate({ method = 'GET', username, password }) {
        const lowerMethod = method.toLowerCase();
        if(lowerMethod !== 'get' && lowerMethod !== 'post') {
            return Promise.reject(new Error('GET and POST are the only valid methods for user authentication.'));
        }
        const encodedAuth = platform.base64.encode(`${username}:${password}`);
        const authPlug = this._plug.at('authenticate').withHeader('Authorization', `Basic ${encodedAuth}`);
        return authPlug[lowerMethod]().then((r) => r.text());
    }

    /**
     * Get a {@see User} object by ID.
     * @param {Number|String} [id='current'] - The user's numeric ID or username.
     * @returns {User} - The User object corresponding to the supplied ID.
     */
    getUser(id = 'current') {
        return new User(id, this._settings);
    }
}
