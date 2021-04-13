//imports
import { useState, useEffect } from "react";

// creating a custom hook with the prefix "use"
const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// abortCont stopts the fetch when it gets the signal from the return cleanup below
		const abortCont = new AbortController();
		console.log("use effect ran");

		fetch(url, { signal: abortCont.signal })
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
				if (err.name === "AbortError") {
					// does not update the "state"  // part of the useEffect Cleanup
					console.log(" Fetch Aborted");
				} else {
					console.log("ERROR...  " + err.message);
					setIsLoading(false);
					setError(err.message);
				}
			});
		// cleans up any unmounted errors
		return () => {
			// aborts any fetching errors
			abortCont.abort();
		};
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
