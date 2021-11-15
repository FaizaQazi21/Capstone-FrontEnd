import { BehaviorSubject } from 'rxjs';

import config from '../config';
import { handleResponse } from '../helpers/handle-response';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

// to login it posts the user's credentials to the /users/authenticate 
// route on the api, if authentication is successful the user details 
// including the token are added to local storage, and the current user 
// is set in the application by calling currentUserSubject.next(user)

//If you don't want the user to stay logged in between refreshes or sessions 
//the behaviour could easily be changed by storing user details somewhere
//less persistent such as session storage which would persist 
//between refreshes but not browser sessions, or you could remove 
//the calls to localStorage which would cause the user to be 
//logged out if the browser is refreshed.

//  1-currentUser observable can be used when you want a component
// to reactively update when a user logs in or out

//  2-currentUserValue property can be used when you just want to get 
//the current value of the logged in user but don't need to reactively
//update when it changes


export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
