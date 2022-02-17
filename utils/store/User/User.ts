import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    email: "",
    user_id: -1,
    isLoggedIn: false,
    token: "",

    details: {
      phone: "",
      name: "",
      surname: "",
    },
  },
  reducers: {
    setLoggedIn(state) {
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify({ isLoggedIn: true }));
    },
    setDetails(state, { payload }) {
      state.email = payload.email;
      state.user_id = payload.id;
      state.details.phone = payload.phone;
      state.details.name = payload.name;
      state.details.surname = payload.surname;
    },
    setLoggedOut(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const userReducers = user.reducer;
export const userActions = user.actions;
