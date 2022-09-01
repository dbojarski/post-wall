import { all, call, takeLatest, put } from 'redux-saga/effects';

import {
  signInWithGooglePopup,
  signOut,
} from '../../utils/firebase/firebase.utils';
import { setUser, signInError, signOutError } from './user.reducer';

function* signInToApplication() {
  try {
    const { user } = yield call(signInWithGooglePopup);

    yield put(setUser(user));
  } catch (error) {
    yield put(signInError(error));
  }
}

function* signOutFromApplication() {
  try {
    yield call(signOut);
    yield put(setUser(null));
  } catch (error) {
    yield put(signOutError(error));
  }
}

export function* onSignIn() {
  yield takeLatest('user/signInStart', signInToApplication);
}

export function* onSignOut() {
  yield takeLatest('user/signOutStart', signOutFromApplication);
}

export function* userSagas() {
  yield all([call(onSignIn), call(onSignOut)]);
}
