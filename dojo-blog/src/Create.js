// IMPORTS
import { useState } from "react";

const Create = () => {
	// setting up state for each input field in the form
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mario");

	return (
		<div className="create">
			<h2>Add A New Blog</h2>
			<form>
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
				<button>Add Blog</button>
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
