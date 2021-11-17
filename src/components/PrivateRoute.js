import React from 'react';
import {  Navigate } from 'react-router-dom';

import { authenticationService } from '../services/authentication.service';



export const PrivateRoute = ({ component: Component, roles, ...props }) => {
        const currentUser = authenticationService.currentUserValue;

        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Navigate to={'/login'} />
        }
        // check if route is restricted by role
        if (roles && currentUser.role !== 'Admin') {
            // role not authorised so redirect to home page
            return <Navigate to={'/'} />
        }

        // authorised so return component
        return <Component {...props} />
};


