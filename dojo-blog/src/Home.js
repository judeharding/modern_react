//imports
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
	// renaming data to blogs below
	const { data: blogs, isLoading, error } = useFetch(
		"http://localhost:8000/blogs"
	);

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
