import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger/src';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root.saga';
import rootReducer from './root.reducer';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        logger,
        sagaMiddleware
      ),
  });
  const persistor = persistStore(store, {});

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
