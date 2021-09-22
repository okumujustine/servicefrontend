import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from "../store/auth/auth";
import itemsReducer from "../store/items/items";
import notificationsReducer from "../store/items/notifications";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    itemState: itemsReducer,
    notificationsState: notificationsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
