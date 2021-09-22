import React from 'react'
import {
    Route,
} from "react-router-dom";
import LinkedinLoginCallback from '../auth/LinkedinLoginCallback';

import Login from '../auth/Login';
import Profile from '../auth/Profile';
import RecoverPassword from '../auth/RecoverPassword';
import Register from '../auth/Register';
import ResetPassword from '../auth/ResetPassword';
import ProtectedRoute from '../components/ProtectedRoute';
import UnProtectedRoute from '../components/UnProtectedRoute';
import Home from "../home/"
import Listings from '../items/Listings';
import Notifications from '../notification/Notifications';
import { ROUTES } from './routes';

export default function NavigationRoutes() {
    return (
        <>
            <Route exact path={ROUTES.LISTING} component={Listings} />
            
            <UnProtectedRoute exact path={ROUTES.LOGIN} component={Login} />
            <UnProtectedRoute exact path={ROUTES.REGISTER} component={Register} />
            <UnProtectedRoute exact path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
            <UnProtectedRoute exact path={ROUTES.RECOVER_PASSWORD} component={RecoverPassword} />
            <UnProtectedRoute exact path={ROUTES.LINKEDIN_CALLBACK} component={LinkedinLoginCallback} />

            <ProtectedRoute exact path={ROUTES.NOTIFICATION} component={Notifications} />
            <ProtectedRoute exact path={ROUTES.CREATE} component={Home} />
            <ProtectedRoute exact path={ROUTES.PROFILE} component={Profile} />
            
        </>
    )
}
