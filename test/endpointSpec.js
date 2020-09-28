'use strict';

const {
    assertions,
    gist
} = require('./Helpers');

describe('Gists testcases', () => {
    const token = 'get your valid token';
    const username = 'set your valid github username';
    const expectedGistID = 'aa5a315d61ae9438b18d';
    const gistIdWithComments = 'cc5a315d61ae9438b1re';


    describe('Valid Cases', () => {
        it('Should return  gists of user', async() => {
            const response = await gist.getGistsOfUser(token, username);
            assertions.assertSuccessStatusCode(response);
            assertions.assertGistId(response, expectedGistID);
        });

        it('Should create new gists successfully', async() => {
            const response = await gist.createNewGist(token, username);
            assertions.assertSuccessCreatedStatusCode(response);
        });

        it('Should update existing gists successfully', async() => {
            const response = await gist.updateGistByGistId(token, username, expectedGistID);
            assertions.assertSuccessStatusCode(response);
            assertions.assertGistId(response, expectedGistID);
        });

        it('Should list all comments gists successfully', async() => {
            const response = await gist.listAllCommentsOfGist(token, gistIdWithComments);
            assertions.assertSuccessStatusCode(response);
        });

    });

    describe('InValid Cases', () => {
        it('Should return an error when sending invalid one token', async() => {
            const response = await gist.getGistsOfUser('Invalid token', username);
            assertions.assertForbiddenErrorStatusCode(response);
        });

        it('Should return an error when sending invalid gist id while updating', async() => {
            const response = await gist.updateGistByGistId(token, username, 'InvalidID');
            assertions.assertBadRequestStatusCode(response);
        });
});