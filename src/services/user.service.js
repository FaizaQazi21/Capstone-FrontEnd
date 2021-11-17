import config from '../config';
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';
import { getTaskByProjectID } from "../data";//TEMP


//accessing secure api endpoints with the http authorization header 
//set after logging in to the application:

//the auth header is set with a JWT token in the auth-header.js helper above. 
//The secure endpoints in the example are fake/mock routes implemented 
//in the fake-backend.js


export const userService = {
    getAll,
    getById,
    getAllProjects,
    getAllUsers,
    getAllRoles,
    getProject,
    getUser,
    getTask,
    createUser,
    createProject,
    createTask,
    getUserTasks,
    getProjectTasks,
    getProjectTotalTasks,
    getProjectFinishedTasks,
    updateProject,
    updateUser
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function getAllProjects(){
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://localhost:8080/api/project`, requestOptions).then(handleResponse);
}

function getAllUsers(){
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://localhost:8080/api/user`, requestOptions).then(handleResponse);
}

function getAllRoles(){
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://localhost:8080/api/role`, requestOptions).then(handleResponse);
}


function getProject(id){
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://localhost:8080/api/project/${id}`, requestOptions).then(handleResponse);
}

function updateProject(options,id){
    const requestOptions = options
    requestOptions.Authorization = authHeader().Authorization
    return fetch(`http://localhost:8080/api/project/update/${id}`, requestOptions).then(handleResponse);
}

function updateUser(options,id){
    const requestOptions = options
    requestOptions.Authorization = authHeader().Authorization
    return fetch(`http://localhost:8080/api/user/${id}`, requestOptions).then(handleResponse);
}


function getUser(id){
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://localhost:8080/api/user/${id}`, requestOptions).then(handleResponse);
}

//TODO
function getTask(id){
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://localhost:8080/api/task/${id}`, requestOptions).then(handleResponse);
}

function createUser(options){
    const requestOptions = options
    requestOptions.Authorization = authHeader().Authorization
    return fetch(`http://localhost:8080/api/user/`, requestOptions).then(handleResponse);
}

function createProject(options){
    const requestOptions = options
    requestOptions.Authorization = authHeader().Authorization
    return fetch(`http://localhost:8080/api/project/`, requestOptions).then(handleResponse);
}

//TODO
function createTask(options){
    const requestOptions = options
    requestOptions.Authorization = authHeader().Authorization
    return fetch(`http://localhost:8080/api/task/`, requestOptions).then(handleResponse);
}

function getUserTasks(id){
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://localhost:8080/api/task/user/${id}`, requestOptions).then(handleResponse);
}

//TODO
function getProjectTasks(id){
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://localhost:8080/api/task/project/${id}`, requestOptions).then(handleResponse);
}

//TODO
function getProjectTotalTasks(id){
    let data = getTaskByProjectID(id);
    return data.length;
    //const requestOptions = { method: 'GET', headers: authHeader() };
    //return fetch(`http://localhost:8080/api/task/project/${id}`, requestOptions).then(handleResponse);
}

//TODO
function getProjectFinishedTasks(id){
    let data = getTaskByProjectID(id);
    return data.length;
    //const requestOptions = { method: 'GET', headers: authHeader() };
    //return fetch(`http://localhost:8080/api/task/project/${id}`, requestOptions).then(handleResponse);
}
