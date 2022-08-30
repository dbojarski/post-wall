import { Button, BUTTON_TYPES } from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setAddPostVisibility } from '../../state/posts/posts.reducer';
import { selectUser } from '../../state/user/user.selectors';
import {
  ActionsContainer,
  AddPostContainer,
  TextAreaContainer,
  UserPhoto,
} from './AddPost.styles';

export function AddPost() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const cancelAddingPost = () => dispatch(setAddPostVisibility(false));
  const createPost = () => {
    /* TODO */
  };

  return (
    <AddPostContainer>
      <TextAreaContainer>
        <UserPhoto src={user.photoURL} />
        <textarea rows={4} style={{ width: '100%', resize: 'vertical' }} />
      </TextAreaContainer>

      <ActionsContainer>
        <Button type={BUTTON_TYPES.GHOST} onClick={cancelAddingPost}>
          Cancel
        </Button>
        <Button onClick={createPost}>Send</Button>
      </ActionsContainer>
    </AddPostContainer>
  );
}
