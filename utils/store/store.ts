import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./User/User";
import { useSelector as useReduxSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { watchlistApi } from "@utils/services/watchlistService";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    user: userReducers,
    [watchlistApi.reducerPath]: watchlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(watchlistApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
