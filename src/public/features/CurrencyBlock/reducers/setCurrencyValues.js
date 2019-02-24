const initialState = {
  status: 'NONE',
  currencyFrom: 'USD',
  currencyTo: 'ILS',
  response: []
};

const setCurrencyValues = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENCY_FROM_REQUEST':
      return {
        ...state,
        status: 'REQUEST',
        currencyFrom: action.request
      };

    case 'SET_CURRENCY_FROM_GOT':
      return {
        ...state,
        status: 'GOT',
        response: action.response
      };

    case 'SET_CURRENCY_FROM_ERROR':
      return {
        ...state,
        status: 'ERROR',
        error: action.error
      };

    case 'SET_CURRENCY_TO':
      return {
        ...state,
        currencyTo: action.request
      };

    default:
      return state;
  }
};

export default setCurrencyValues;
