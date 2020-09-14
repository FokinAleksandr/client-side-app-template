export const apiGet = (url) => {
  return fetch(process.env.API_URL + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json().then((data) => ({ data }));
    })
    .catch((error) => ({ error }));
};
