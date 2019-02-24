const initialState = {
  status: 'NONE',
  response: {
    rates: 0
  }
};

const getHistoryRates = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HISTORY_RATES_REQUEST':
      return {
        ...state,
        status: 'REQUEST'
      };

    case 'GET_HISTORY_RATES_GOT':
      return {
        ...state,
        status: 'GOT',
        response: action.response
      };

    case 'GET_HISTORY_RATES_ERROR':
      return {
        ...state,
        status: 'ERROR',
        error: action.error
      };

    case 'GET_HISTORY_RATES_RESET':
      return initialState;

    default:
      return state;
  }
};

export default getHistoryRates;
