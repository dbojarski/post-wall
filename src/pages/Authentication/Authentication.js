import { Container } from '../../assets/styles/Common.styles';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setUser } from '../../state/user/user.reducer';

export function Authentication() {
  const dispatch = useDispatch();
  const authenticateWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    dispatch(setUser(user));
  };

  return (
    <Container>
      <h2>Sign in with Google </h2>
      <button onClick={authenticateWithGoogle}>Sign in with Google</button>
    </Container>
  );
}
