import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./Home.js";

function App() {
	// put in any regular js stuff BEFORE the return.

	const title = "Welcome to the new blog";
	const likes = 50; // numbers and arrays and strings will be converted to strings in interpolation

	// objects or booleans will not be interpolated
	// const person = {name: 'yoshi', age: 30};

	const link = "http://www.google.com";

	return (
		// TEMPLATE for the index.html includes the Navbar and App components

		<div className="App">
			{/* NAVBAR component  */}
			<Navbar></Navbar>

			{/* PAGE CONTENT */}
			<div className="content">
				<h1>App Component</h1>

				<h2>{title}</h2>

				<Home></Home>
				<p>Liked {likes} times today.</p>
				{/* <p>{person}</p> */}
				<p>{10}</p>
				<p>{"hello ninjas"}</p>
				<p>{[1, 2, 3, 4, 5]}</p>
				<p>{Math.random() * 10}</p>
				<a href={link}>Google Site</a>
			</div>
		</div>
	);
}
export default App;

// starter code
// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
