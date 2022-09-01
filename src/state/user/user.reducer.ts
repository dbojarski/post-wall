import { createSlice } from '@reduxjs/toolkit';
import { User as FirebaseUser } from 'firebase/auth';
import { ActionWithPayload } from '../../utils/reducer/reducer.utils';

export type User = FirebaseUser & {
  displayName: string;
  photoURL: string;
};

export type UserSate = {
  data: User | null;
  authPending: boolean;
  error: Error | null;
};

const INITIAL_STATE: UserSate = {
  data: null,
  authPending: false,
  error: null,
};

const userReducer = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, { payload }: ActionWithPayload<User | null>) => ({
      ...state,
      data: payload,
    }),
    signInStart: (state) => ({ ...state, authPending: true }),
    signInError: (state, { payload }: ActionWithPayload<Error>) => ({
      ...state,
      authPending: false,
      error: payload,
    }),
    signOutStart: (state) => ({ ...state, authPending: true }),
    signOutError: (state, { payload }: ActionWithPayload<Error>) => ({
      ...state,
      authPending: false,
      error: payload,
    }),
  },
});

export const { setUser, signInStart, signInError, signOutStart, signOutError } =
  userReducer.actions;
export default userReducer.reducer;
