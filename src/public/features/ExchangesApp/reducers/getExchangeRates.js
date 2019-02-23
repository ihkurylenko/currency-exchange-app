const initialState = {
  status: 'NONE',
  response: []
};

const getExchangeRates = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EXCHANGE_RATES_REQUEST':
      return {
        ...state,
        status: 'REQUEST'
      };
    case 'GET_EXCHANGE_RATES_GOT':
      return {
        ...state,
        status: 'GOT',
        response: action.response
      };
    case 'GET_EXCHANGE_RATES_ERROR':
      return {
        ...state,
        status: 'ERROR',
        error: action.error
      };

    default:
      return state;
  }
};

export default getExchangeRates;
