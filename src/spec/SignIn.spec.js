const assert = require('assert');
const AccessTokenService = require('../services/accessToken');


describe('Sign in test', () => {
});
describe('access token service', () => {
    const access_token_service = new AccessTokenService;
    describe('verify access token', () => {
        const valid_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZGYiLCJpYXQiOjE2MDAwNzA5MjMsImV4cCI6MTYwMjY2MjkyM30.o1z6BozQZi8VDynmFkt5gp-fEJBVTKY2jVvVWUgONzM';
        const payload = {
            email: "asdf",
            iat: 1600070923,
            exp: 1602662923
        };
        it('valid token', () => {
            assert.deepEqual(access_token_service.verify(valid_token), payload);
        });
    });
    
    describe('create access token', () => {
        it('success to create access token', () => {
            const token = access_token_service.create('1234');
            
            const payload = access_token_service.verify(token);
            assert.equal(payload.email, '1234');
        });
    });
});

