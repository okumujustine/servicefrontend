import { createSlice } from '@reduxjs/toolkit';
import backendAPI from '../../api';

import { User } from '../../features/items/Listings';

export interface AuthState {
    loggedIn: boolean;
    user: User | null;
    loading: boolean;
}

const initialState: AuthState = {
    loggedIn: false,
    user: null,
    loading: false,
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLoader: (state, action) => {
            state.loading = action.payload;
        },
        authLoadingStop: (state, action) => {
            state.loading = false;
        },
        userLoggedIn: (state, action) => {
            state.loggedIn = true;
            state.user = action.payload;
        },
        loginSuccess: (state, action) => {
            state.loggedIn = true;
            state.user = action.payload;
        },
        logoutSuccess: (state, action) => {
            state.user = null;
            state.loggedIn = action.payload;
        },
    },
});

const { userLoggedIn, authLoader, logoutSuccess } = authSlice.actions

export const setUserAfterLoginAction = (user) => async dispatch => {
    dispatch(userLoggedIn(user))
    window.location.replace("/")
}

export const loginAction = ({ username_email, password }) => async dispatch => {
    console.log(username_email, password)
}

export const checkLoggedIn = () => async dispatch => {
    dispatch(authLoader(true));
    try {
        const { user } = await backendAPI.getLoggedInUser()
        dispatch(userLoggedIn(user))
        dispatch(authLoader(false));
    } catch (e) {
        dispatch(authLoader(false));
    }
}

export const onLogout = () => async dispatch => {

    try {
        await backendAPI.logout()
        dispatch(logoutSuccess(false))
    } catch (e) {
        alert("failed to logout, try again later")
    }
}

export const setAuthLoader = (value: boolean) => async dispatch => {
    dispatch(authLoader(value));
}

export default authSlice.reducer;
