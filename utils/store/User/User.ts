import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    email: "",
    user_id: -1,
    isLoggedIn: false,

    details: {
      phone: "",
      name: "",
      surname: "",
    },
  },
  reducers: {
    setLoggedIn(state) {
      state.isLoggedIn = true;
    },
  },
});

export const userReducers = user.reducer;
export const userActions = user.actions;
