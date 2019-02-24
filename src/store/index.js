import { createStore, combineReducers, applyMiddleware } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import getExchangeRates from 'public/features/ExchangesApp/reducers/getExchangeRates';
import currencyValues from 'public/features/CurrencyBlock/reducers/setCurrencyValues';
import historyRates from 'public/features/CurrencyBlock/reducers/getHistoryRates';

import ExchangeAppSagas from 'public/features/ExchangesApp/sagas';
import SetCurrencyValuesSagas from 'public/features/CurrencyBlock/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ getExchangeRates, currencyValues, historyRates }),
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  const ExchangeAppSagasForks = ExchangeAppSagas.map(saga => fork(saga));
  const SetCurrencyValuesSagasForks = SetCurrencyValuesSagas.map(saga => fork(saga));

  yield all([...ExchangeAppSagasForks, ...SetCurrencyValuesSagasForks]);
}

sagaMiddleware.run(rootSaga);

export default store;
