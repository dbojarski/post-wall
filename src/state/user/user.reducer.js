import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  data: null,
  authPending: false,
  error: null,
};

const userReducer = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, { payload }) => ({ ...state, data: payload }),
    signInStart: (state) => ({ ...state, authPending: true }),
    signInError: (state, { payload }) => ({
      ...state,
      authPending: false,
      error: payload,
    }),
    signOutStart: (state) => ({ ...state, authPending: true }),
    signOutError: (state, { payload }) => ({
      ...state,
      authPending: false,
      error: payload,
    }),
  },
});

export const { setUser, signInStart, signInError, signOutStart, signOutError } =
  userReducer.actions;
export default userReducer.reducer;
