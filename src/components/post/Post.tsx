import { memo } from 'react';

import {
  PostAuthorPicture,
  PostContainer,
  PostContent,
  PostHeader,
} from './Post.styles';
import { Post as PostType } from '../../state/posts/posts.reducer';

type PostProps = {
  post: PostType;
};
export const Post = memo(function Post({ post }: PostProps) {
  return (
    <PostContainer>
      <PostHeader>
        <PostAuthorPicture src={post.author.photoURL} />
        <span>{post.author.name}</span>
      </PostHeader>
      <PostContent>{post.content}</PostContent>
    </PostContainer>
  );
});
