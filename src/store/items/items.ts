import { createSlice } from '@reduxjs/toolkit';

import backendAPI from '../../api';

export interface ItemState {
    items: any[];
    itemsLoading: boolean;
}

const initialState: ItemState = {
    items: [],
    itemsLoading: false,
};


export const itemSlice = createSlice({
    name: 'itemState',
    initialState,
    reducers: {
        isItemsLoading: (state, action) => {
            state.itemsLoading = action.payload;
        },
        itemsLoaded: (state, action) => {
            state.items = action.payload;
        },
        updateItemStatusReducer: (state, action) => {
            let changeableArray = state.items

            const itemIndex = changeableArray.findIndex((item => item._id === action.payload.itemId));
            changeableArray[itemIndex].status = action.payload.status;

            state.items = changeableArray
        }
    },
});

const { itemsLoaded, isItemsLoading, updateItemStatusReducer } = itemSlice.actions

export const loadItem = () => async dispatch => {
    dispatch(isItemsLoading(true))
    try {
        const items = await backendAPI.getAllListings()
        dispatch(itemsLoaded(items))
        dispatch(isItemsLoading(false))

    } catch (err) {
        dispatch(isItemsLoading(false))
        // toast.error(err.response ? err.response.data.message : 'Error loading items')
    }
}

export const updateItemStatusOnUI = ({ itemId, status }: { itemId: string, status: string }) => async dispatch => {
    dispatch(updateItemStatusReducer({ itemId, status }))
}


export default itemSlice.reducer;
