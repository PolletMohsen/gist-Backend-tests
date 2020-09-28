'use strict';

const {
    assertions,
    gist
} = require('./Helpers');

describe('Get filters from legacy', () => {
    const token = 'get your valid token';
    const username = 'set your valid github username';
    const expectedGistID = 'aa5a315d61ae9438b18d';

    before(async() => {
       
    });

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

    });

    describe('InValid Cases', () => {
        it('Should return an error when sending invalid one source', async() => {
            const response = await getQueriesEP.getQueriesBySources(
                ['blogs', 'for', 'news'], signatureToken,
            );

            expect(response.body).to.deep.equals({
                ok: false,
                error: 'signature_authentication.invalid_payload_signature',
            });
        });

        it('Should return an error when sending invalid source', async() => {
            const response = await getQueriesEP.getQueriesBySources(['blo'], signatureToken);

            expect(response.body).to.deep.equals({
                ok: false,
                error: 'signature_authentication.invalid_payload_signature',
            });
        });

        it('Should return an error when sending invalid signature', async() => {
            const invalidToken = {
                timestamp: '1598180147',
                signature: '97bad51be4ad6c697e74c65d0580db7f51a3e3d0f515965',
            };

            const response = await getQueriesEP.getQueriesBySources(
                ['blogs', 'forums', 'news'], invalidToken,
            );

            expect(response.body).to.deep.equals({
                ok: false,
                error: 'signature_authentication.expired_signature',
            });
        });
    });
});