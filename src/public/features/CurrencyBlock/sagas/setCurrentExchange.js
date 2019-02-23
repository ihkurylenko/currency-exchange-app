import { put, takeLatest } from 'redux-saga/effects';
import { setCurrencyFrom, setCurrencyTo } from '../actions/setCurrencyValues';

function* setCurrentExchange(action) {
  try {
    yield put(action.data);
  } catch (e) {
    console.log(e);
  }
}

export default function* setCurrentExchangeSaga() {
  yield takeLatest('SET_CURRENT_EXCHANGE', setCurrentExchange);
}
