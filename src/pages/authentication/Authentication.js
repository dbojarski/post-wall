import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../assets/styles/Common.styles';
import { selectUser } from '../../state/user/user.selectors';
import { setUser } from '../../state/user/user.reducer';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { Button } from '../../components/button/Button';

export function Authentication() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const authenticateWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    dispatch(setUser(user));
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <Container>
      <h2>Sign in with Google </h2>
      <Button onClick={authenticateWithGoogle}>Sign in with Google</Button>
    </Container>
  );
}
