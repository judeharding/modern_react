// imports
import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	// using the fetch hook created earlier
	const { data: blog, error, isLoading } = useFetch(
		"http://localhost:8000/blogs/" + id
	);

	return (
		// TEMPLATE
		<div className="blog-details">
			{/* <h2>Blog Details - {id} </h2> */}
			{isLoading && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by: {blog.author}</p>
					<div>{blog.body}</div>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
// TEMPLATEls;
