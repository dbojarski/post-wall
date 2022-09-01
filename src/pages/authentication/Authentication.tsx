import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Wrapper } from '../../assets/styles/Common.styles';
import { selectUser } from '../../state/user/user.selectors';
import { signInStart } from '../../state/user/user.reducer';
import { Button } from '../../components/button/Button';

export function Authentication() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const authenticateWithGoogle = () => dispatch(signInStart());

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <Wrapper>
      <h2>Sign in with Google </h2>
      <Button onClick={authenticateWithGoogle}>Sign in with Google</Button>
    </Wrapper>
  );
}
