import { call, put, takeLatest } from 'redux-saga/effects';
import { got, err } from '../actions/getExchangeRates';
import { apiRequest } from 'shared/core/apiRequest';
import { ratesMapper } from 'shared/core/utils';

function* getExchangeRates() {
  try {
    const res = yield call(apiRequest, { base: 'USD' });
    const mappedRates = ratesMapper(res.rates);

    yield put(got({ ...res, mappedRates }));
  } catch (e) {
    console.log(e);
    yield put(err(e));
  }
}

export default function* getExchangeRatesSaga() {
  yield takeLatest('GET_EXCHANGE_RATES_REQUEST', getExchangeRates);
}
