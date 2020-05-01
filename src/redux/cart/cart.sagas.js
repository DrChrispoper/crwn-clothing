import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';

import { clearCart } from './cart.actions';

export function* clearCartStart() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartStart);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
