export const req = request => ({
  type: 'GET_HISTORY_RATES_REQUEST',
  request
});

export const got = response => ({
  type: 'GET_HISTORY_RATES_GOT',
  response
});

export const err = error => ({
  type: 'GET_HISTORY_RATES_ERROR',
  error
});

export const reset = () => ({
  type: 'GET_HISTORY_RATES_RESET'
});
