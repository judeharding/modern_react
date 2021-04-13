import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	// put in any regular js stuff BEFORE the return.

	return (
		// wrapping this in a router tag gives everything within the APP.js file access to the router stuff
		<Router>
			{/* TEMPLATE for the index.html includes the Navbar and App components */}
			<div className="App">
				{/* NAVBAR component  */}
				<Navbar></Navbar>

				{/* PAGE CONTENT */}
				<div className="content">
					<h1>App Component</h1>

					{/* the switch tag allows for only ONE route shows in the content section of the App. 
				and all future routes will appear in the SWITCH*/}
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/create">
							<Create></Create>
						</Route>

						<Route path="/blogs/:id">
							<BlogDetails></BlogDetails>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
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
