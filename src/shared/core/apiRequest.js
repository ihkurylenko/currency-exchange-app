const ulrParams = params => new URLSearchParams(Object.entries(params));

export const getLatestRates = async currency => {
  const response = await fetch(`https://api.exchangeratesapi.io/latest?${ulrParams(currency)}`);
  const data = await response.json();
  return data;
};

export const getHistoryRates = async (startAt, endAt, currency) => {
  const response = await fetch(`https://api.exchangeratesapi.io/history?${ulrParams(startAt, endAt, currency)}`);
  const data = await response.json();
  return data;
};
