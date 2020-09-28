// 'use strict';

// const expect = require('./expect');
// const _ = require('lodash');


// module.exports = {
//     assertSuccessStatusCode: response =>
//         expect(response.status).to.deep.equals(200),

//     assertBadRequestStatusCode: response =>
//         expect(response.status).to.deep.equals(400),

//     assertForbiddenErrorStatusCode: response =>
//         expect(response.status).to.deep.equals(403),

//     assertInternalServerErrorStatusCode: response =>
//         expect(response.status).to.deep.equals(500),
// };

// function base64Decode(str) { 
//     return new Buffer(str, 'base64').toString()
// }

// export const authHeader = {
//     Authorization: "Bearer " + base64Decode(Cypress.config('credentials').authToken)
// }

// export const noAuth = {}

// export const userName = Cypress.config('credentials').userName
