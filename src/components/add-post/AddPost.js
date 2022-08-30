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
import { addPost } from '../../utils/firebase/firebase.utils';

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
  const createPost = async (data) => {
    const payload = {
      author: {
        photoURL: user.photoURL,
        name: user.displayName,
      },
      date: new Date(),
      content: data.content,
    };

    await addPost(payload);
    dispatch(setAddPostVisibility(false));
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
        <Button disabled={!isValid}>Send</Button>
      </ActionsContainer>
    </AddPostForm>
  );
}
