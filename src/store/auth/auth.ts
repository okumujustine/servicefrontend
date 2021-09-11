import { createSlice } from '@reduxjs/toolkit';
import { getLoggedInUser } from '../../api/auth/getLoggedInUser';
import { User } from '../../features/items/Listings';

// import { RootState, AppThunk } from '../../app/store';
// createAsyncThunk, 

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
        },
    },
});

const { userLoggedIn, authLoader } = authSlice.actions

export const setUserAfterLoginAction = (user) => async dispatch => {
    console.log(user)
}

export const loginAction = ({ username_email, password }) => async dispatch => {
    console.log(username_email, password)
}

export const checkLoggedIn = () => async dispatch => {
    dispatch(authLoader(true));
    try {
        const { user } = await getLoggedInUser()
        dispatch(userLoggedIn(user))
        dispatch(authLoader(false));
    } catch (e) {
        console.log("error fetching user")
        dispatch(authLoader(false));
    }
}

export default authSlice.reducer;
