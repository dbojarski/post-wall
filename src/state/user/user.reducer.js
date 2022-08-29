import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: null,
};

const userReducer = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      return { ...state, user: action.payload };
    },
  },
});

export const { setUser } = userReducer.actions;
export default userReducer.reducer;
