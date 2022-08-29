import {
  HeaderWrapper,
  HeaderLink,
  HeaderLinks,
  HeaderLogo,
  HeaderContainer,
} from './Header.styles';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo onClick={navigateToHome} />

        <HeaderLinks>
          <HeaderLink to='/authentication'>Sign in</HeaderLink>
        </HeaderLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
