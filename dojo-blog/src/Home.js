//imports
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);

	// useEffect(() => {
	// 	// runs everytime a component renders - even the 1st time
	// 	console.log(" use effect ran");
	// 	// now only runs when NAME changes - like a watcher
	// }, [name]);

	useEffect(() => {
		console.log("use effect ran");
		fetch("http://localhost:8000/blogs")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setBlogs(data);
			});
	}, []);

	//TEMPLATE
	return (
		<div className="home">
			<h2>Home Page</h2>

			{/* curley braces arouns the bloglist component to handle the "no data yet" problem . 
			 it works with conditional templating.  the blogs 
			 has to eval to TRUE before the component on the left
			  of the && is rendered */}
			{blogs && <BlogList blogs={blogs} title="All Blogs!!!"></BlogList>}
		</div>
	);
};

export default Home;
