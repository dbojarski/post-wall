import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  HeaderWrapper,
  HeaderLink,
  HeaderLinks,
  HeaderLogo,
  HeaderContainer,
} from './Header.styles';
import { selectUser } from '../../state/user/user.selectors';
import { UserPill } from '../user-pill/UserPill';

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

        <HeaderLinks>
          {user ? (
            <UserPill />
          ) : (
            <HeaderLink to='/authentication'>Sign in</HeaderLink>
          )}
        </HeaderLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
