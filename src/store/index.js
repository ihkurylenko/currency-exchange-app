import { createStore, combineReducers, applyMiddleware } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import getExchangeRatesReducer from '../public/features/ExchangesApp/reducers/getExchangeRates';

import ExchangeAppSagas from '../public/features/ExchangesApp/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ getExchangeRatesReducer }),
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  const ExchangeAppSagasForks = ExchangeAppSagas.map(saga => fork(saga));

  yield all([
    ...ExchangeAppSagasForks
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;
