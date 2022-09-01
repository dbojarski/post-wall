import styled from 'styled-components';
import { Wrapper } from '../../assets/styles/Common.styles';

const headerHeight = '85px';

export const FeedContainer = styled.div`
  overflow: auto;
  height: calc(100vh - ${headerHeight});
  padding: 25px 0;

  ${Wrapper} {
    display: grid;
    grid-template-columns: 250px auto;
    grid-gap: 25px;
  }
`;

export const Sidebar = styled.div`
  width: 250px;
`;

export const FeedMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
