'use client';
import { createSlice } from '@reduxjs/toolkit';
import { authEntity } from './entity.auth';

const initialState: authEntity = {
  id: '',
  username: '',
  email: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.id = action.payload?.id;
      state.username = action.payload?.username;
      state.email = action.payload?.email;
    },
    setLogout: (state, action) => {
      state.id = '';
      state.username = '';
      state.email = '';
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
