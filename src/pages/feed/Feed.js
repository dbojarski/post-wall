import { FeedContainer, FeedMain, Sidebar } from './Feed.styles';
import { Wrapper } from '../../assets/styles/Common.styles';
import { PostsList } from '../../components/posts-list/PostsList';
import { TagsWidget } from '../../components/tags-widget/TagsWidget';
import { useSelector } from 'react-redux';
import { selectAddPostsVisibility } from '../../state/posts/posts.selectors';
import { AddPost } from '../../components/add-post/AddPost';

export function Feed() {
  const addPostVisible = useSelector(selectAddPostsVisibility);

  return (
    <FeedContainer>
      <Wrapper>
        <Sidebar>
          <TagsWidget />
        </Sidebar>

        <FeedMain>
          {addPostVisible && <AddPost />}
          <PostsList />
        </FeedMain>
      </Wrapper>
    </FeedContainer>
  );
}
