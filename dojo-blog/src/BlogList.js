// const BlogList = (props) => {  // destructuring below
const BlogList = ({ blogs, title, handleDelete }) => {
	// const blogs = props.blogs;
	// const title = props.title;

	// TEMPLATE
	return (
		<div className="blog-list">
			<h2>{title} </h2>

			{/* map method cycles thru an array w/js */}
			{blogs.map((blog) => (
				// when using map, you must have a unique KEY

				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by: {blog.author}</p>
					{/* creating an anonymous function to delete from the HOME.js  */}
					<button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
				</div>
			))}
		</div>
	);
};

export default BlogList;
