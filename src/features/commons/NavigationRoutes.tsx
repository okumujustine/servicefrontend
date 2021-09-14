import React from 'react'
import {
    Route,
} from "react-router-dom";

import Login from '../auth/Login';
import Profile from '../auth/Profile';
import Register from '../auth/Register';
import ProtectedRoute from '../components/ProtectedRoute';
import UnProtectedRoute from '../components/UnProtectedRoute';
import Home from "../home/"
import Listings from '../items/Listings';

export default function NavigationRoutes() {
    return (
        <>
            <Route exact path="/" component={Listings} />
            <UnProtectedRoute exact path="/login" component={Login} />
            <UnProtectedRoute exact path="/register" component={Register} />
            <ProtectedRoute exact path="/create" component={Home} />
            <ProtectedRoute exact path="/profile" component={Profile} />
        </>
    )
}
