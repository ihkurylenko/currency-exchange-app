import { put, takeLatest } from 'redux-saga/effects';
import { set } from '../actions/setCurrentExchange';

function* setCurrentExchange(action) {
  try {
    yield put(set(action.data));
  } catch (e) {
    console.log(e);
  }
}

export default function* setCurrentExchangeSaga() {
  yield takeLatest('SET_CURRENT_EXCHANGE', setCurrentExchange);
}
