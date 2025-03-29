const validator = require('jsonschema');
const userSchema = require('./schemas/user.json');
const usersSchema = require('./schemas/users.json');

describe('Testing of Users API', () => {
    let baseUrl = 'https://fakerestapi.azurewebsites.net';

    it('GET should return list of all users', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        let body = await response.json();
        let validatorResult = validator.validate(body, usersSchema);

        expect(response.status).toBe(200);
        expect(validatorResult.valid).toBeTruthy();
        expect(body.length > 0).toBeTruthy();
    })

    it('POST should create new user', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: 11,
                userName: 'userName',
                password: 'password'
            })
        })

        let body = await response.json();
        let validatorResult = validator.validate(body, userSchema);

        expect(response.status).toBe(200);
        expect(body.id).toBe(11);
        expect(body.userName).toBe('userName');
        expect(body.password).toBe('password');
        expect(validatorResult.valid).toBeTruthy();
    })

    it('POST should return error when sending ID of existing user', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: 1,
                userName: 'longUserName',
                password: 'password'
            })
        })

        let body = await response.json();

        expect(response.status).toBe(400);
        expect(body.id).toBe(1);
        expect(body.userName).toBe('longUserName');
        expect(body.password).toBe('password');
    })


    it('GET should return user with existing id', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users' + '/5', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })

        let body = await response.json();
        let validatorResult = validator.validate(body, userSchema);

        expect(response.status).toBe(200);
        expect(validatorResult.valid).toBeTruthy();
        expect(body.id).toBe(5);
    })
    
    it('GET should return error when sending not existing id', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users' + '/100', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })

        expect(response.status).toBe(404);
    })

    it('PUT should change password of existing user', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users' + '/5', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: 5,
                password: 'password1'
            })
        })

        let body = await response.json();
        let validatorResult = validator.validate(body, userSchema);

        expect(response.status).toBe(200);
        expect(validatorResult.valid).toBeTruthy();
        expect(body.password).toBe('password1');
    })
    

    it('PUT should return error if required id field is missing', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users' + '/5', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                userName: 'User 2'
            })
        })

        expect(response.status).toBe(400);
    })
    

    it('DELETE should remove existing user', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users' + '/3', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })

        expect(response.status).toBe(200);
    })

    
    it('DELETE should return error while deleting unexisting user', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users' + '/800', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })

        expect(response.status).toBe(404);
    })
})