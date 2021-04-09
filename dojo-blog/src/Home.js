//imports
import { useState } from "react";

// let name = "mario"; // this is NOT reactive to rerendure the template

// const handleClickAgain = (name) => {
// 	console.log("hello again " + name);
// };

const Home = () => {
	const [name, setName] = useState("mario");
	console.log("NAME B4 click = " + name);

	const handleClick = () => {
		console.log("hello, ninja");
		setName("luigi");
		console.log("NAME AFTER click = " + name);
	};

	//TEMPLATE
	return (
		<div className="home">
			<h2>Home Page</h2>
			<p>NAME = {name}</p>
			<button onClick={handleClick}>Click me from home.js</button>
			{/* <button
				onClick={() => {
					handleClickAgain("mario");
				}}
			>
				Click Me Again from home.js
			</button> */}
		</div>
	);
};

export default Home;
