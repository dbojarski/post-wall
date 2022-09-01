import { RootState } from '../root.reducer';
import { Post } from './posts.reducer';

export const selectPosts = (state: RootState): Post[] => state.posts.data;

export const selectAddPostsVisibility = (state: RootState): boolean =>
  state.posts.addPostVisible;
