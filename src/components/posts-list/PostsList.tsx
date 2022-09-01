import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../utils/firebase/firebase.utils';
import { Post } from '../post/Post';
import { PostsListContainer } from './PostsList.styles';
import { selectPosts } from '../../state/posts/posts.selectors';
import { setPosts } from '../../state/posts/posts.reducer';

export function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();

      dispatch(setPosts(posts));
    };

    fetchPosts();
  }, []);

  return (
    <PostsListContainer>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </PostsListContainer>
  );
}
