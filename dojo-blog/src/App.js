import "./App.css";

function App() {
	// put in any regular js stuff BEFORE the return.

	const title = "Welcome to the new blog";
	const likes = 50; // numbers and arrays and strings will be converted to strings in interpolation

	// objects or booleans will not be interpolated
	// const person = {name: 'yoshi', age: 30};

	return (
		<div className="App">
			<div className="content">
				<h1>App Component</h1>
				<h2>{title}</h2>
				<p>Liked {likes} times today.</p>
				{/* <p>{person}</p> */}
				<p>{10}</p>
				<p>{"hello ninjas"}</p>
				<p>{[1, 2, 3, 4, 5]}</p>
				<p>{Math.random() * 10}</p>
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
