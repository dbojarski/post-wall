import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger/src';

import userReducer from './user/user.reducer';

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
