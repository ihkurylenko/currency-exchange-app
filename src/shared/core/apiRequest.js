export const apiRequest = async params => {
  if (params) {
    const urlParams = new URLSearchParams(Object.entries(params));
    const response = await fetch('https://api.exchangeratesapi.io/latest?' + urlParams);
    const data = await response.json();
    return data;
  } else {
    const response = await fetch('https://api.exchangeratesapi.io/latest?');
    const data = await response.json();
    return data;
  }
};
