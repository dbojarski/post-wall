import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  HeaderWrapper,
  HeaderLink,
  HeaderLinks,
  HeaderLogo,
  HeaderContainer,
  HeaderLoggedArea,
} from './Header.styles';
import { selectUser } from '../../state/user/user.selectors';
import { UserPill } from '../user-pill/UserPill';
import { Button, ButtonType } from '../button/Button';
import { setAddPostVisibility } from '../../state/posts/posts.reducer';

const LoggedUserArea = () => {
  const dispatch = useDispatch();

  const onAddPost = () => dispatch(setAddPostVisibility(true));

  return (
    <HeaderLoggedArea>
      <UserPill />
      <Button variant={ButtonType.accent} onClick={onAddPost}>
        Add post
      </Button>
    </HeaderLoggedArea>
  );
};

export function Header() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo onClick={navigateToHome} />

        {user ? (
          <LoggedUserArea />
        ) : (
          <HeaderLinks>
            <HeaderLink to='/authentication'>Sign in</HeaderLink>
          </HeaderLinks>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
}
