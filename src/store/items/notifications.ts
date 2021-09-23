import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import backendAPI from '../../api';

export interface INotificationState {
    notifications: any[];
    notificationsLoading: boolean;
}

const initialState: INotificationState = {
    notifications: [],
    notificationsLoading: false,
};


export const notificationSlice = createSlice({
    name: 'notificationsState',
    initialState,
    reducers: {
        isNotificationsLoading: (state, action) => {
            state.notificationsLoading = action.payload;
        },
        notificationsLoaded: (state, action) => {
            state.notifications = action.payload;
        }
    },
});

const { isNotificationsLoading, notificationsLoaded } = notificationSlice.actions

export const loadNotifications = () => async dispatch => {
    dispatch(isNotificationsLoading(true))
    try {
        const notificationsResponse = await backendAPI.myNotificationRequests()

        dispatch(notificationsLoaded(notificationsResponse.notification))
        dispatch(isNotificationsLoading(false))

    } catch (err) {
        dispatch(isNotificationsLoading(false))
        toast.error(err.response ? err.response.data.message : 'Error loading notifications, try again later')
    }
}



export default notificationSlice.reducer;