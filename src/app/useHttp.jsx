import { useState, useEffect } from "react";

function useHttp(URL) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const responseJson = await response.json();
      setData(responseJson);
      // setLoading(false);
    };
    fetchData();
  }, []);

  const sendRequest = () => {
    // TODO...
    // Make a generic fetch request hook
    return { data };
  };

  return { sendRequest };
}

export default useHttp;
