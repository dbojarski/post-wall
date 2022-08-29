import { useNavigate } from 'react-router-dom';

import {
  HeaderWrapper,
  HeaderLink,
  HeaderLinks,
  HeaderLogo,
  HeaderContainer,
} from './Header.styles';
import { useSelector } from 'react-redux';
import { selectUser } from '../../state/user/user.selectors';

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
          <HeaderLink to='/authentication'>
            {user ? 'Sign out' : 'Sign in'}
          </HeaderLink>
        </HeaderLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
