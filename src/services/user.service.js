import config from '../config';
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';


//accessing secure api endpoints with the http authorization header 
//set after logging in to the application:

//the auth header is set with a JWT token in the auth-header.js helper above. 
//The secure endpoints in the example are fake/mock routes implemented 
//in the fake-backend.js


export const userService = {
    getAll,
    getById
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}
