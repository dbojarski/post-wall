import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Button, ButtonType } from '../button/Button';
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
import { User } from '../../state/user/user.reducer';

export function AddPost() {
  const user = useSelector(selectUser) as User;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const cancelAddingPost = () => dispatch(setAddPostVisibility(false));
  const createPost = async ({ content }: { content: string }) => {
    const payload = {
      author: {
        photoURL: user.photoURL,
        name: user.displayName,
      },
      date: new Date(),
      content,
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
          variant={ButtonType.ghost}
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
