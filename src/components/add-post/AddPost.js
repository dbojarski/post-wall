import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Button, BUTTON_TYPES } from '../button/Button';
import { setAddPostVisibility } from '../../state/posts/posts.reducer';
import { selectUser } from '../../state/user/user.selectors';
import {
  ActionsContainer,
  AddPostForm,
  PostContent,
  TextAreaContainer,
  UserPhoto,
} from './AddPost.styles';

export function AddPost() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const cancelAddingPost = () => dispatch(setAddPostVisibility(false));
  const createPost = (data) => {
    /* TODO */
  };

  return (
    <AddPostForm onSubmit={handleSubmit(createPost)}>
      <TextAreaContainer>
        <UserPhoto src={user.photoURL} />
        <PostContent
          placeholder='Insert your message here'
          {...register('content', { required: 'Post content is required' })}
        />
      </TextAreaContainer>

      <ActionsContainer>
        <Button
          variant={BUTTON_TYPES.GHOST}
          type='button'
          onClick={cancelAddingPost}
        >
          Cancel
        </Button>
        <Button disabled={!isValid} onClick={createPost}>
          Send
        </Button>
      </ActionsContainer>
    </AddPostForm>
  );
}
