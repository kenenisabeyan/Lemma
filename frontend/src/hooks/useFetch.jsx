import { useState, useEffect } from 'react';
import api from '../services/api';

export const useFetch = (url, fallbackData = null) => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    api.get(url)
      .then((res) => {
        if (isMounted) {
          setData(res.data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.warn(`[useFetch] API endpoint ${url} failed, using fallback data if available:`, err.message);
          setError(err);
          if (fallbackData) setData(fallbackData);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, [url]);

  return { data, loading, error, setData };
};
