import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import initStore from './state/store';
import { Authentication } from './pages/authentication/Authentication';
import { Feed } from './pages/feed/Feed';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const { store, persistor } = initStore();

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Feed />} />
            <Route path='/authentication' element={<Authentication />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
