import { call, put, takeLatest } from 'redux-saga/effects';
import { got, err } from '../actions/setCurrencyFrom';
import { getLatestRates } from 'shared/core/apiRequest';
import { ratesMapper } from 'shared/core/utils';

function* currencyFrom(action) {
  try {
    const res = yield call(getLatestRates, { base: action.request });
    const mappedRates = ratesMapper(res.rates);

    yield put(got({ ...res, mappedRates }));
  } catch (e) {
    yield put(err(e));
  }
}

export default function* setCurrencyFromSaga() {
  yield takeLatest('SET_CURRENCY_FROM_REQUEST', currencyFrom);
}
