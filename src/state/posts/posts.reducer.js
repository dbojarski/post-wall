import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  addPostVisible: false,
  data: [],
};

const postsReducer = createSlice({
  name: 'posts',
  initialState: INITIAL_STATE,
  reducers: {
    setPosts: (state, action) => ({ ...state, data: action.payload }),
    setAddPostVisibility: (state, action) => ({
      ...state,
      addPostVisible: action.payload,
    }),
  },
});

export const { setPosts, setAddPostVisibility } = postsReducer.actions;
export default postsReducer.reducer;
