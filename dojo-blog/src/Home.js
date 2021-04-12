//imports
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		console.log("use effect ran");
		fetch("http://localhost:8000/blogs")
			.then((res) => {
				if (!res.ok) {
					throw Error("Could Not Fetch the data");
				}
				return res.json();
			})
			.then((data) => {
				setBlogs(data);
				setIsLoading(false);
				setError(null);
			})
			.catch((err) => {
				console.log("ERROR...  " + err.message);
				setIsLoading(false);
				setError(err.message);
			});
	}, []);

	//TEMPLATE
	return (
		<div className="home">
			<h2>Home Page</h2>

			{/* conditional rendering for server errors  */}
			{error && <div> {error} </div>}

			{/* conditional temlate waiting on data to load...  */}
			{isLoading && <div>Is Loading... </div>}

			{/* curley braces arouns the bloglist component to handle the "no data yet" problem . 
			 it works with conditional templating.  the blogs 
			 has to eval to TRUE before the component on the left
			  of the && is rendered */}
			{blogs && <BlogList blogs={blogs} title="All Blogs!!!"></BlogList>}
		</div>
	);
};

export default Home;
