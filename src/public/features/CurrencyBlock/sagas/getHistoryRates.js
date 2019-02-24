import { call, put, select, takeLatest } from 'redux-saga/effects';
import { got, err } from '../actions/getHistoryRates';
import { getHistoryRates } from 'shared/core/apiRequest';

function* historyRates(action) {
  try {
    const store = yield select();
    const { startAt, endAt, base } = action.request;

    const res = yield call(getHistoryRates, { start_at: startAt, end_at: endAt, base });
    const mapped = Object.keys(res.rates).map(k => res.rates[k]);
    const arrayOfDates = Object.keys(res.rates);
    const arrayOfRates = mapped.map(item => item[store.currencyValues.currencyTo]);
    yield put(got({ ...res, arrayOfRates, arrayOfDates }));
  } catch (e) {
    yield put(err(e));
  }
}

export default function* getHistoryRatesSaga() {
  yield takeLatest('GET_HISTORY_RATES_REQUEST', historyRates);
}
