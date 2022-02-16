import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./User/User";
import { useSelector as useReduxSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
