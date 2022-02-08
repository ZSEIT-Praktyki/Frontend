import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./User/User";

const store = configureStore({
  reducer: {
    user: userReducers,
  },
});

export default store;
