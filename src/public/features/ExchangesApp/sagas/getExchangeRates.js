import { call, put, takeLatest } from 'redux-saga/effects';
import { got, err } from '../actions/getExchangeRates';
import {
  got as setCurrencyFromGot,
  err as setCurrencyFromErr
} from 'public/features/CurrencyBlock/actions/setCurrencyFrom';
import { apiRequest } from 'shared/core/apiRequest';
import { ratesMapper } from 'shared/core/utils';

function* getExchangeRates() {
  try {
    const res = yield call(apiRequest, { base: 'USD' });
    const mappedRates = ratesMapper(res.rates);

    yield put(setCurrencyFromGot(res));
    yield put(got({ ...res, mappedRates }));
  } catch (e) {
    yield put(err(e));
    yield put(setCurrencyFromErr(e));
  }
}

export default function* getExchangeRatesSaga() {
  yield takeLatest('GET_EXCHANGE_RATES_REQUEST', getExchangeRates);
}
