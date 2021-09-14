import React from 'react'
import {
    Route,
} from "react-router-dom";

import Login from '../auth/Login';
import Profile from '../auth/Profile';
import Register from '../auth/Register';
import ResetPassword from '../auth/ResetPassword';
import ProtectedRoute from '../components/ProtectedRoute';
import UnProtectedRoute from '../components/UnProtectedRoute';
import Home from "../home/"
import Listings from '../items/Listings';
import { ROUTES } from './routes';

export default function NavigationRoutes() {
    return (
        <>
            <Route exact path={ROUTES.LISTING} component={Listings} />
            
            <UnProtectedRoute exact path={ROUTES.LOGIN} component={Login} />
            <UnProtectedRoute exact path={ROUTES.REGISTER} component={Register} />
            <UnProtectedRoute exact path={ROUTES.RESET_PASSWORD} component={ResetPassword} />

            <ProtectedRoute exact path={ROUTES.CREATE} component={Home} />
            <ProtectedRoute exact path={ROUTES.PROFILE} component={Profile} />
            
        </>
    )
}
