export const apiRequest = async params => {
  const urlParams = new URLSearchParams(Object.entries(params));
  const response = await fetch('https://api.exchangeratesapi.io/latest?' + urlParams);
  const data = await response.json();
  return data;
};
