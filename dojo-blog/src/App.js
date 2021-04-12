import Navbar from "./Navbar.js";
import Home from "./Home.js";

function App() {
	// put in any regular js stuff BEFORE the return.

	return (
		// TEMPLATE for the index.html includes the Navbar and App components

		<div className="App">
			{/* NAVBAR component  */}
			<Navbar></Navbar>

			{/* PAGE CONTENT */}
			<div className="content">
				<h1>App Component</h1>

				{/* <h2>{title}</h2> */}

				<Home></Home>
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
