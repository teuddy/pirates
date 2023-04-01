import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice'
// import authReducer from './features/auth/authSlice';
// import piratesReducer from './features/pirates/piratesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // pirates: piratesReducer,
  },
});

export default store;
