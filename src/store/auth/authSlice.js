import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, logout, setError } = authSlice.actions;

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post("/auth/register", userData);
    console.log(response.data);
  } catch (error) {
    dispatch(setError(error.response.data.error));
  }
};

export default authSlice.reducer;
