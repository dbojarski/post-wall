import posts from '../../assets/mocked-data/posts.json';
import { Post } from '../post/Post';
import { PostsListContainer } from './PostsList.styles';

export function PostsList() {
  return (
    <PostsListContainer>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </PostsListContainer>
  );
}
