//imports
import { useState } from "react";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			title: "My new website",
			body: "lorem ipsum...",
			author: "mario",
			id: 1,
		},
		{
			title: "Welcome party!",
			body: "lorem ipsum...",
			author: "yoshi",
			id: 2,
		},
		{
			title: "Web dev top tips",
			body: "lorem ipsum...",
			author: "mario",
			id: 3,
		},
	]);

	//TEMPLATE
	return (
		<div className="home">
			<h2>Home Page</h2>
			{/* map method cycles thru an array w/js */}

			{blogs.map((blog) => (
				// when using map, you must have a unique KEY
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by: {blog.author}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
