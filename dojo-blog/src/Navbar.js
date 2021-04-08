// import any files needed

// type sfc and snippet will create a "stateless, functional component"
// give it the name of your component and it will create a boilerplate
const Navbar = () => {
	return (
		// returning jsx template for the NAVBAR
		<nav className="navbar">
			<h1>The Dojo Blog</h1>
			<div className="links">
				<a href="/">Home</a>
				<a href="/create"> New Blog</a>
			</div>
		</nav>
	);
};

//exports here.  add import './Navbar.js on the App.js file
export default Navbar;

// dynamic styling can be applied to the href above
// it was interpolation of an object
// <a
// 					href="/create"
// 					style={{
// 						color: "white",
// 						backgroundColor: "#f1356d",
// 						borderRadius: "8px",
// 					}}
// 				></a>
