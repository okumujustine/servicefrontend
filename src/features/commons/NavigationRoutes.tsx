import React from 'react'
import {
    Route,
} from "react-router-dom";

import Login from '../auth/Login';
import Profile from '../auth/Profile';
import Register from '../auth/Register';
import Home from "../home/"
import Listings from '../items/Listings';

export default function NavigationRoutes() {
    return (
        <>
            <Route exact path="/" component={Listings} />
            <Route exact path="/create" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
        </>
    )
}
