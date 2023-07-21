import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'authenticated', 'not-authenticated'
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: state => {
      state.status = 'checking';
      state.user = {};
      errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },
  },
});
// Action creators are generated for each case reducer function
export const { onChecking, onLogin } = authSlice.actions;
