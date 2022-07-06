import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../redux/Users/reducer';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
