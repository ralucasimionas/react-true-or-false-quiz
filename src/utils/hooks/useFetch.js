import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);

  const doFetch = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        console.log("api response", data.results);
      });
  };

  useEffect(() => {
    doFetch(url);
  }, [url]);

  return [data, doFetch];
}
