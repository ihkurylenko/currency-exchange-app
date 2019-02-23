export const req = request => ({
  type: 'SET_CURRENCY_FROM_REQ',
  request
});

export const got = response => ({
  type: 'SET_CURRENCY_FROM_GOT',
  response
});

export const err = error => ({
  type: 'SET_CURRENCY_FROM_ERROR',
  error
});
