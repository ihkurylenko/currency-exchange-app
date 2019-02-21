import { call, put, takeLatest } from 'redux-saga/effects';
import { got, err } from '../actions/getExchangeRates';

const asyncFunc = async () => {
  let response = await fetch('https://api.exchangeratesapi.io/latest');
  let data = await response.json()
  return data;
};

function* getExchangeRates() {
  try {
    const res = yield call(asyncFunc);
    yield put(got(res));
  } catch (e) {
    yield put(err(e));
  }
}

export default function* getExchangeRatesSaga() {
  yield takeLatest('GET_EXCHANGE_RATES_REQUEST', getExchangeRates);
}
