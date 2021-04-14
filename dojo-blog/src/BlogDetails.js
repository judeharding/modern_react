// imports
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
// import { useHistory } from "react-router-dom";

const BlogDetails = () => {
	const { id } = useParams();
	// using the fetch hook created earlier
	const { data: blog, error, isLoading } = useFetch(
		"http://localhost:8000/blogs/" + id
	);
	const history = useHistory();

	const handleClick = () => {
		// fetch request to delete
		fetch("http://localhost:8000/blogs/" + blog.id, {
			method: "DELETE",
		}).then(() => {
			history.push("/");
		});
	};

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
					<button onClick={handleClick}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
// TEMPLATEls;
