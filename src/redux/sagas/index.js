/* eslint-disable import/prefer-default-export */
import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes';

import { userLoginSaga } from './userSagas';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(actionTypes.USER_LOGIN_INITIATE, userLoginSaga);
}
