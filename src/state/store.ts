import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { PersistConfig, Persistor } from 'redux-persist/es/types';

import { rootSaga } from './root.saga';
import rootReducer, { RootState } from './root.reducer';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

type StoreSettings = {
  store: EnhancedStore;
  persistor: Persistor;
};

export default (): StoreSettings => {
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
