import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess(state, action) {
      state = { ...action.payload, isLoggedIn: true };
      return state;
    },
    loginSuccess(state, action) {
      state = { ...action.payload, isLoggedIn: true };
      return state;
    },
    initialize(state, action) {
      state.user = action.payload;
      return state;
    },
    logoutSuccess(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
    addToCartSuccess(state, action) {
      state.user.cart = action.payload;
      return state;
    },
  },
});

export const { registerSuccess, loginSuccess, initialize, logoutSuccess,addToCartSuccess } =
  slice.actions;

export default slice.reducer;
