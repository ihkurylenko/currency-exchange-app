const initialState = {
  currencyFrom: 'USD',
  currencyTo: 'ILS'
};

const setCurrencyValues = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENCY_FROM':
      return {
        ...state,
        currencyFrom: action.currencyFrom
      };

    case 'SET_CURRENCY_TO':
      return {
        ...state,
        currencyTo: action.currencyTo
      };

    default:
      return state;
  }
};

export default setCurrencyValues;
