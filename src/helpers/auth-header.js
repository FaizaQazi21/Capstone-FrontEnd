import { authenticationService } from '../services/authentication.service';

// helper function that returns an HTTP Authorization header 
//containing the JWT auth token of the currently logged in user

//auth header is used to make authenticated HTTP requests
//to the server api using JWT authentication
export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}` };
    } else {
        return {};
    }
}