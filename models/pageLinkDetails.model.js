/**
 * Martian - Core JavaScript API for MindTouch
 *
 * Copyright (c) 2015 MindTouch Inc.
 * www.mindtouch.com  oss@mindtouch.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { pageModel } from './page.model.js';
import { fileModel } from './file.model.js';

export const pageLinkDetailsModel = [
    { field: 'count', transform: 'number' },
    { field: 'querycount', name: 'queryCount', transform: 'number' },
    {
        field: 'pages',
        isArray: true,
        transform: [
            {
                field: 'links',
                isArray: true,
                transform: [
                    { field: '@sequence', name: 'sequence', transform: 'number' },
                    { field: '@isredirect', name: 'isRedirect', transform: 'boolean' },
                    { field: '@isbroken', name: 'isBroken', transform: 'boolean' },
                    { field: 'class' },
                    { field: 'href' },
                    { field: 'rel' },
                    { field: 'text' },
                    { field: 'type' },
                    { field: [ 'destination', 'page' ], name: 'destinationPage', transform: pageModel },
                    { field: [ 'destination', 'file' ], name: 'destinationFile', transform: fileModel }
                ]
            },
            { field: 'page', transform: pageModel }
        ]
    }
];