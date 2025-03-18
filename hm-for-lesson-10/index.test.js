describe('Testing of Users API', () => {
    let baseUrl = 'https://fakerestapi.azurewebsites.net';

    it('should return all users', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })

        let body = await response.json();

        expect(response.status).toBe(200);
        expect(Array.isArray(body)).toBe(true);
        body.forEach(element => {
            expect(typeof element.id).toBe('number');
            expect(typeof element.userName).toBe('string');
            expect(typeof element.password).toBe('string');
        })
    })

    it('should create user', async () => {
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

        expect(response.status).toBe(200);
        expect(body.id).toBe(11);
        expect(body.userName).toBe('userName');
        expect(body.password).toBe('password');
    })

    it('should return error when sending ID of existing user', async () => {
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


    it('should return user with existing id', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users' + '/5', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })

        let body = await response.json();

        expect(response.status).toBe(200);
        expect(body.id).toBe(5);
    })
    
    it('should return error when sending not existing id', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users' + '/100', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })

        expect(response.status).toBe(404);
    })

    it('should change password of existing user', async () => {
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

        expect(response.status).toBe(200);
        expect(body.password).toBe('password1');
    })
    

    it('should return error if required id field is missing', async () => {
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
    

    it('should delete existing user', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users' + '/3', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })

        expect(response.status).toBe(200);
    })

    
    it('should return error while deleting unexisting user', async () => {
        let response = await fetch(baseUrl + '/api/v1/Users' + '/800', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })

        expect(response.status).toBe(404);
    })
})