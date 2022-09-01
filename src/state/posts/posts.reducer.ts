import { createSlice } from '@reduxjs/toolkit';

import { ActionWithPayload } from '../../utils/reducer/reducer.utils';

export type Post = {
  id?: string;
  author: {
    name: string;
    photoURL: string;
  };
  date: Date;
  content: string;
};

export type PostsState = {
  addPostVisible: boolean;
  data: Post[];
};
const INITIAL_STATE: PostsState = {
  addPostVisible: false,
  data: [],
};

const postsReducer = createSlice({
  name: 'posts',
  initialState: INITIAL_STATE,
  reducers: {
    setPosts: (state, { payload: data }: ActionWithPayload<Post[]>) => ({
      ...state,
      data,
    }),
    setAddPostVisibility: (
      state,
      { payload: addPostVisible }: ActionWithPayload<boolean>
    ) => ({
      ...state,
      addPostVisible,
    }),
  },
});

export const { setPosts, setAddPostVisibility } = postsReducer.actions;
export default postsReducer.reducer;
