import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import initStore from './state/store';
import reportWebVitals from './reportWebVitals';
import { Authentication } from './pages/authentication/Authentication';
import { PostsList } from './components/posts-list/PostsList';

const root = ReactDOM.createRoot(document.getElementById('root'));
const { store, persistor } = initStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='/' element={<PostsList />} />
              <Route path='/authentication' element={<Authentication />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
