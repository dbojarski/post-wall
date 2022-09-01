import { combineReducers } from '@reduxjs/toolkit';

import userReducer, { UserSate } from './user/user.reducer';
import postsReducer, { PostsState } from './posts/posts.reducer';

export type RootState = {
  user: UserSate;
  posts: PostsState;
};

export default combineReducers({
  user: userReducer,
  posts: postsReducer,
});
