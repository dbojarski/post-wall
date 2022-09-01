import { useSelector } from 'react-redux';

import { AddPost } from '../../components/add-post/AddPost';
import { FeedContainer, FeedMain, Sidebar } from './Feed.styles';
import { PostsList } from '../../components/posts-list/PostsList';
import { selectAddPostsVisibility } from '../../state/posts/posts.selectors';
import { TagsWidget } from '../../components/tags-widget/TagsWidget';
import { Wrapper } from '../../assets/styles/Common.styles';

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
