// IMPORTS
import { Link } from "react-router-dom";

// const BlogList = (props) => {  // destructuring below
const BlogList = ({ blogs, title }) => {
	// TEMPLATE
	return (
		<div className="blog-list">
			<h2>{title} </h2>

			{/* map method cycles thru an array w/js */}
			{blogs.map((blog) => (
				// when using map, you must have a unique KEY

				<div className="blog-preview" key={blog.id}>
					<Link to={`/blogs/${blog.id}`}>
						<h2>{blog.title}</h2>
						<p>Written by: {blog.author}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogList;
