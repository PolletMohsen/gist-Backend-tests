'use strict';

const expect = require('./expect');
const _ = require('lodash');
const { reporters } = require('mocha');

module.exports = {
    assertSuccessStatusCode: response =>
        expect(response.status).to.deep.equals(200),

    assertSuccessCreatedStatusCode: response =>
        expect(response.status).to.deep.equals(201),

    assertBadRequestStatusCode: response =>
        expect(response.status).to.deep.equals(400),

    assertForbiddenErrorStatusCode: response =>
        expect(response.status).to.deep.equals(403),

    assertInternalServerErrorStatusCode: response =>
        expect(response.status).to.deep.equals(500),
    
    assertGistId: (response, gistId) => 
        expect(response.body[0].id).to.deep.equal(gistId),
    
};
