import  {useState, useEffect} from 'react';

function useHttp(url) {
	const [data, setData] = useState(null)
		
	useEffect(() => {
		try {
			const response = fetch(url).then(res => res.json()).then(res => setData(res))
			
		} catch (error) {
			console.log(error)
		}
		console.log(data)
		console.log(url)
	},[url])

	return data;
}

export default useHttp;
