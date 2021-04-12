//imports
import { useState, useEffect } from "react";

// creating a custom hook with the prefix "use"
const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		console.log("use effect ran");
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error("Could Not Fetch the data");
				}
				return res.json();
			})
			.then((data1) => {
				setData(data1);
				setIsLoading(false);
				setError(null);
			})
			.catch((err) => {
				console.log("ERROR...  " + err.message);
				setIsLoading(false);
				setError(err.message);
			});
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
