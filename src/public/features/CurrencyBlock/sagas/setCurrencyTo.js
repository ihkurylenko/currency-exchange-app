import { put, takeLatest } from 'redux-saga/effects';
import { got } from '../actions/setCurrencyTo';

function* currencyTo(action) {
  try {
    yield put(got(action.request));
  } catch (e) {
    console.log(e);
  }
}

export default function* setCurrencyToSaga() {
  yield takeLatest('SET_CURRENCY_TO_REQ', currencyTo);
}
