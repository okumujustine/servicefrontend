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
        },
        notificationAdded: (state, action) => {
            const notificationState = state.notifications
            const notificationPayload = action.payload

            const isNotificationInArray = notificationState.some((notification) => notification._id === notificationPayload._id)

            if (!isNotificationInArray) {
                const newNotification = state.notifications.concat([notificationPayload]);
                state.notifications = newNotification

                toast.info(`${notificationPayload?.user?.username} requested to help on ${notificationPayload?.item?.title}`)
            } else {
                state.notifications = notificationState
            }
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