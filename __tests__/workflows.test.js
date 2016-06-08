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
/* eslint-env jasmine, jest */
jest.unmock('../workflows');
import { WorkflowManager } from '../workflows';
describe('Workflows', () => {
    describe('operations', () => {
        describe('submit feedback', () => {
            let wm = null;
            beforeEach(() => {
                wm = new WorkflowManager();
            });
            afterEach(() => {
                wm = null;
            });
            it('can submit page feedback', () => {
                return wm.submitFeedback({ path: 'foo' });
            });
            it('can fail if the page feedback path is not supplied', () => {
                expect(() => wm.submitFeedback({})).toThrow();
            });
            pit('can send a request article message', () => {
                return wm.requestArticle({});
            });
            pit('can send a submit issue message', () => {
                return wm.submitIssue({});
            });
            pit('can send a contact support message', () => {
                return wm.contactSupport({});
            });
        });
    });
});