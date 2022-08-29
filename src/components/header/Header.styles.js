import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { Wrapper } from '../../assets/styles/Common.styles';

export const HeaderWrapper = styled.div`
  background-color: #2f2f2f;
  height: 85px;
  overflow: hidden;
`;

export const HeaderContainer = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const HeaderLinks = styled.ul`
  list-style: none;
  margin-left: auto;
`;

export const HeaderLink = styled(Link)`
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const HeaderLogo = styled(Logo)`
  height: 30px;
  cursor: pointer;
`;
