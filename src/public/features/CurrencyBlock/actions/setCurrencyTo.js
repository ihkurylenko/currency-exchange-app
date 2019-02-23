export const req = request => ({
  type: 'SET_CURRENCY_TO_REQ',
  request
});

export const got = response => ({
  type: 'SET_CURRENCY_TO_GOT',
  response
});
