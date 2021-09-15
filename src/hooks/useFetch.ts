import { useState, useEffect } from 'react';

const useFetch = (
  fetch: () => any,
  handleError: () => void,
  listener: any
) => {

  const [isRequestSent, setIsRequestSent] = useState<boolean>(false);
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    if (!isRequestSent && !fetchData) {
      setIsRequestSent(true);

      (async function () {
        try {
          const data = fetch();
          setFetchData(data);
        } catch (e) {
          handleError();
          return;
        }
      })();
    }
  }, [listener]);

  return fetchData;
}

export { useFetch };
