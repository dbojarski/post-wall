import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  data: [],
};

const postsReducer = createSlice({
  name: 'posts',
  initialState: INITIAL_STATE,
  reducers: {
    setPosts: (state, action) => ({ ...state, data: action.payload }),
  },
});

export const { setPosts } = postsReducer.actions;
export default postsReducer.reducer;
