import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
});

export const userReducers = user.reducer;
export const userActions = user.actions;
