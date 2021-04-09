//imports
// nothing yet

const handleClick = () => {
	console.log("hello, ninja");
};

const handleClickAgain = (name) => {
	console.log("hello again " + name);
};

const Home = () => {
	return (
		<div className="home">
			<h2>Home Page</h2>
			<button onClick={handleClick}>Click me from home.js</button>
			<button
				onClick={() => {
					handleClickAgain("mario");
				}}
			>
				Click Me Again from home.js
			</button>
		</div>
	);
};

export default Home;
