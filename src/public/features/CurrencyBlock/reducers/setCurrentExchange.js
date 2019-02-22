const initialState = {
  currentExchange: 'USD'
};

const setCurrentExchangeReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'SET_CURRENT_EXCHANGE':
      return {
        ...state,
        currentExchange: action.currentExchange
      };

    default:
      return state;
  }
};

export default setCurrentExchangeReducer;
