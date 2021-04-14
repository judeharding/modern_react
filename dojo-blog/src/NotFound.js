import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		// creating a template
		<div className="not-found">
			<h2>Sorry</h2>
			<br />
			<p>That page cannot be found</p>
			<br />
			<br />
			<Link to="/">Go Home</Link>
		</div>
	);
};

export default NotFound;
