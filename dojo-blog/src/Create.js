// IMPORTS
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
	// setting up state for each input field in the form
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mario");
	const [isLoading, setIsLoading] = useState(false);

	// invoking hook that allows navigation
	const history = useHistory();

	// handling submitting of form (as opposed to an clickEventListener)
	const handleSubmit = (e) => {
		e.preventDefault();
		// create an object to send to the JSON server
		const blog = { title, body, author };

		setIsLoading(true);

		// Fetch API request - 1st arg is the location, 2nd arg is the method and ads new blog
		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("new blog added");
			setIsLoading(false);
			// history.go(-1); // takes you back 1 page
			history.push("/"); // takes the user back to the route of home
		});
	};

	return (
		<div className="create">
			<h2>Add A New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title: </label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>

				<label>Blog Body: </label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Blog Author: </label>
				<select
					value={author}
					onChange={(e) => {
						setAuthor(e.target.value);
					}}
				>
					<option value="mario">mario</option>
					<option value="yoshi">yoshi</option>
				</select>
				{!isLoading && <button>Add Blog</button>}
				{isLoading && <button disabled>Adding Blog...</button>}
				<br />
				<p>{title}</p>
				<br />
				<p>{body}</p>
				<br />
				<p>{author}</p>
			</form>
		</div>
	);
};

export default Create;
