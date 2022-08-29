import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  data: null,
};

const userReducer = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      return { ...state, data: action.payload };
    },
  },
});

export const { setUser } = userReducer.actions;
export default userReducer.reducer;
