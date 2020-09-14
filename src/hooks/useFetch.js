import React from 'react';
import { apiGet } from '../utils/api';

export const fetchStatus = {
  success: 'success',
  error: 'error',
  fetching: 'fetching',
}

export function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState({});
  const [status, setStatus] = React.useState(() => fetchStatus.success);

  const makeRequest = React.useCallback(async () => {
    setStatus(fetchStatus.fetching);
    const [error, data] = await apiGet(url);
    if (error) {
      setStatus(fetchStatus.error);
      setError(error);
    } else {
      setStatus(fetchStatus.success);
      setData(data);
    }
  }, [url]);

  return {status, error, data, makeRequest}
}
