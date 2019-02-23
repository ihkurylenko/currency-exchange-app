export const req = () => ({
  type: 'GET_EXCHANGE_RATES_REQUEST'
});

export const got = response => ({
  type: 'GET_EXCHANGE_RATES_GOT',
  response
});

export const err = error => ({
  type: 'GET_EXCHANGE_RATES_ERROR',
  error
});
