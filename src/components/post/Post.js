import {
  PostAuthorPicture,
  PostContainer,
  PostContent,
  PostHeader,
} from './Post.styles';

export function Post({ post }) {
  return (
    <PostContainer>
      <PostHeader>
        <PostAuthorPicture src={post.author.photoURL} />
        <span>{post.author.name}</span>
      </PostHeader>
      <PostContent>{post.content}</PostContent>
    </PostContainer>
  );
}
