import styled from 'styled-components';

const headerHeight = '85px';

export const BodyContainer = styled.div`
  display: flex;
  overflow: auto;
  height: calc(100vh - ${headerHeight});
`;

export const OutletContainer = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 25px 0;
`;
