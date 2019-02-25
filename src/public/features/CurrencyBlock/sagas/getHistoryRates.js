import { call, put, select, takeLatest } from 'redux-saga/effects';
import { got, err } from '../actions/getHistoryRates';
import { getHistoryRates } from 'shared/core/apiRequest';

function* historyRates(action) {
  try {
    const store = yield select();
    const { startAt, endAt, base } = action.request;

    const res = yield call(getHistoryRates, { start_at: startAt, end_at: endAt, base });
    const sortedDates = Object.keys(res.rates).sort();
    const mapped = sortedDates.map(k => res.rates[k]);
    const arrayOfRates = mapped.map(item => item[store.currencyValues.currencyTo]);
    yield put(got({ ...res, arrayOfRates, arrayOfDates: sortedDates }));
  } catch (e) {
    yield put(err(e));
  }
}

export default function* getHistoryRatesSaga() {
  yield takeLatest('GET_HISTORY_RATES_REQUEST', historyRates);
}
