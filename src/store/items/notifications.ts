import { createSlice } from '@reduxjs/toolkit';

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
        },
        notificationAdded: (state, action) => {
            const newNotification = state.notifications.concat([action.payload]);
            state.notifications = newNotification
        }
    },
});

const { isNotificationsLoading, notificationsLoaded, notificationAdded } = notificationSlice.actions

export const loadNotifications = () => async dispatch => {
    dispatch(isNotificationsLoading(true))
    try {
        const notificationsResponse = await backendAPI.myNotificationRequests()

        dispatch(notificationsLoaded(notificationsResponse.notification))
        dispatch(isNotificationsLoading(false))

    } catch (err) {
        dispatch(isNotificationsLoading(false))
        // toast.error(err.response ? err.response.data.message : 'Error loading notifications, try again later')
    }
}

export const loadNewNotification = (notification: any) => async dispatch => {
    dispatch(notificationAdded(notification))
}



export default notificationSlice.reducer;