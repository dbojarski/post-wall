import { Outlet } from 'react-router-dom';

import { Header } from './components/header/Header';
import { BodyContainer, OutletContainer } from './App.styles';
import { Wrapper } from './assets/styles/Common.styles';

function App() {
  return (
    <>
      <Header />
      <BodyContainer>
        <Wrapper>
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </Wrapper>
      </BodyContainer>
    </>
  );
}

export default App;
