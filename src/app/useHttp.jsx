import { json } from "react-router-dom";
import { useEffect, useState } from "react";

function useHttp(url, callback) {

  const [data, setData] = useState([]);
  // TODO...
  // Make a generic fetch request hook
  useEffect(() => {
	async function fetchData() {
		await fetch(url)
		.then((response) => {
		  return response.json();
		})
		.then((json) => {
		  setData(json);
		})
		.catch((err) => {
		  console.log(err);
		});
	}
	fetchData();

  }, []);

  return data;
}

export default useHttp;
