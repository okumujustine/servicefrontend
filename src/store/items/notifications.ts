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
        // updateItemStatusReducer: (state, action) => {
        //     let changeableArray = state.items

        //     const itemIndex = changeableArray.findIndex((item => item._id === action.payload.itemId));
        //     changeableArray[itemIndex].status = action.payload.status;

        //     state.items = changeableArray
        // }
    },
});

const { isNotificationsLoading, notificationsLoaded } = notificationSlice.actions

export const loadNotifications = () => async dispatch => {
    dispatch(isNotificationsLoading(true))
    try {
        const items = await backendAPI.getAllListings()
        dispatch(notificationsLoaded(items))
        dispatch(isNotificationsLoading(false))

    } catch (err) {
        dispatch(isNotificationsLoading(false))
        // toast.error(err.response ? err.response.data.message : 'Error loading notifications')
    }
}

// export const updateItemStatusOnUI = ({ itemId, status }: { itemId: string, status: string }) => async dispatch => {
//     dispatch(updateItemStatusReducer({ itemId, status }))
// }


export default notificationSlice.reducer;