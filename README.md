Testing Github
https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d

JSON vid - https://www.youtube.com/watch?v=mAqYJF-yxO8

video lessons code
https://github.com/iamshaunjp/Complete-React-Tutorial

using createReactApp as a starter project

npx create-react-app dojo-blog

cd into the dojo-blog and NPM RUN START to use the start script in the JSON file (ps - no node folder b/c you downloaded code from github? no worries, just terminal to the root and type NPM INSTALL. npm will use the package.json file to create the correct node modules being used in the package.json dependencies)

check out the index.html to see the ROOT div.  
it is getting filled out by the index.js in src.

the index.js is getting is data from the App.js component (and App.css)

COMPONENTS are the workhorse for your project. Each are a self contained section of content. They contain their OWN template and logic.

The root component in a React project is the App.js file.  
 a component starts with some import files, then a function or arrowfunc (that RETURNS something) a string of jsx (that looks like html). Bable will convert jsx into html. The last thing in a component file is the EXPORT DEFAULT COMPONENTNAME

ALL COMPONENTS START WITH A CAPITAL LETTER

JSX use elements with classNames (capN)(can't use class b/c class is a reserved word in js - hence className)

JSX DYNAMIC TEMPLATES and Values
Dynamic templates include interpolation within the RETURN.
You can write all of your functions or arrow functions between the declaration of the Component and the return line.
Numbers and arrays and strings will be converted to strings in interpolation. Objects and booleans will not.

MULTIPLE COMPONENTS.
The initial, root component renedered is the App.js file. Any sub components will be NESTED within the App.js file.

So, make a new file within the SRC folder - ex. Navbar.js (notice the capital N).

STYLLING
the index.css is kind of like a global css. You can also have an App.css as a layer over the index.css.

Another common way is to delete the App.css file and just use the index.css. But both css files will appear in the DOM.

STATE - the data being used at that time. If you want a variable to change based on a user action, then you are want to use a hook like setState.

HOOKS in react are known by their title USE - useState hook
first - import {usestate} from 'react'; if you set a var or let to a name, that var is NOT reactive. You need to use a SETSTATE function to update the template. You do this by importing setState from 'react'.

Then, within the component, const invoke the useStateFunction - useState('mario');
(the array below is called an array-destructering)
but that function should be stored in a variable -
const [nameToChangeVALUEisMario, setNAMEFunction] = useState('mario'). useState can be a string, number, bool, object, array.
The original value is stored in nameToChangeMario.
The function to change that original value is stored setNAMEFunction once the event is triggered, the setNAMEFunction is executed and the template(return) is updated

const handleClick = () => {
setName('luigi');
}

installing React Dev Tools gives us access to the COMPONENTS tree (inspect)

PROPS - when using data from one component inside another component, you need to use PROPS from a parent to child component by adding a property name on the child tag - ex <BlogList blogs={blogs}></BlogList> and make sure you RECEIVE it on the BlogsList component the argument passed into the BlogList.js (props)
const blogs = props.blogs;

Filter an array on the parent component
<BlogList
blogs={blogs.filter((blog) => blog.author === "mario")}
title="Mario's Blogs!!!" ></BlogList>

MORE HOOKS - useState, useEffect - runs a function on every render of the component (when a state has changed). Import useEffect from 'react'. It runs everytime a component renders - even the 1st time. but be careful.
don't change state in the useEffect or you MIGHT create an endless loop. Can be used to fetch data.

UseEffect has dependencies. the Dependency Array is a second argument to the function.
useEffect(() => {  
 console.log(" use effect ran");
}, []);
the EMPTY array above only runs on the FIRST render of useEffect.

If I add a dependency to the array - ex name - then only when the NAME changes does the useEffect run.

useEffect is great for JSON.

CREATE A FAKE JSON FILE TO WATCH to set API endpoints
JSON - in a new terminal window, npx json-server --watch data/db.json --port 8000
we open port 8000 b/c our current file is running on 3000
use this for GET requests

SOMETIMES, the program runs soooo fast that you will get an error b/c blogs hasn't come down to my machine from the SERVER. In the template, add curly braces around the component. Add blogs && <BlogListk>.

it works with conditional templating. the blogs has to eval to TRUE before the component on the left of the && is rendered.

Create custom hooks with the prefix use - useFetch.

.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.

=================
template for new proj
using createReactApp as a starter project

1.) npx create-react-app new-app-name

2.) install router for routing pages thru terminal = npm install react-router-dom@5 // last stable version

3.) Open VS terminal and type npm run start. Optional, open another VS terminal and type npx json-server --watch data/db.json --port 8000 (if you are running any json files)

4.) delete the REACT stuff you don't want like logo files and odd components.

5.) add some index css for the entire SPA.
// base styles

STAR\* {
margin: 0;
font-family: "Quicksand";
color: #333;
}
.navbar {
padding: 20px;
display: flex;
align-items: center;
max-width: 600px;
margin: 0 auto;
border-bottom: 1px solid #f2f2f2;
}
.navbar h1 {
color: #f1356d;
}
.navbar .links {
margin-left: auto;
}
.navbar a {
margin-left: 16px;
text-decoration: none;
padding: 6px;
}
.navbar a:hover {
color: #f1356d;
}
.content {
max-width: 600px;
margin: 40px auto;
padding: 20px;
}

6.) then in your App.js file, surround everything after the return in a <Router></Router> tag
then in your CONTENT section of the app.js file, add the <Switch> tag. This allows for only ONE route to be displayed at a time. Within the SWITCH component, you establish all of your ROUTES like: the HOME component wrapped in a ROUTE tag with a path of...
<Switch>
<Route exact path="/">
<Home />
</Route>

<Route exact path="/contact">
<Contact />
</Route>
<Switch>

7.) For each path, you need to import the LINK from react-router-dom then modify your paths
{/_ instead of using a href tags below, we use 'Link to' tags
to prevent the run to the server - the pages are already here _/}

<div className="links">
<Link to="/">Home</Link>
<Link to="/create"> New Blog</Link>

8.) your index.html feeds from App.js component.
the App.js component gets its work from Home.js component.
you work in the Home.js component.

9.) EVERY little thing in your project is probably a component. and you can have components within components. ex. Navbar is made up of all of the links in your navbar.

when creating a component, type sfc to get a template of a stateless functional component.

make sure you import your child components into the Home.js component.

10.) When working with JSON, you will need to fix your Home.js component...

import useFetch from "./useFetch";

const Home = () => {
// renaming data to blogs below
const { data: blogs, isLoading, error } = useFetch(
"http://localhost:8000/blogs"
);

    //TEMPLATE
    return (
    	<div className="home">
    		<h2>Home Page</h2>

    		{/* conditional rendering for server errors  */}
    		{error && <div> {error} </div>}

    		{/* conditional temlate waiting on data to load...  */}
    		{isLoading && <div>Is Loading... </div>}

    		{/* curley braces arouns the bloglist component to handle the "no data yet" problem .
    		 it works with conditional templating.  the blogs
    		 has to eval to TRUE before the component on the left
    		  of the && is rendered */}
    		{blogs && <BlogList blogs={blogs} title="All Blogs!!!"></BlogList>}
    	</div>
    );

};

export default Home;

11.) you will also need to create a new file called useFetch.js
//imports
import { useState, useEffect } from "react";

// creating a custom hook with the prefix "use"
const useFetch = (url) => {
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
// abortCont stopts the fetch when it gets the signal from the return cleanup below
const abortCont = new AbortController();
console.log("use effect ran");

    	fetch(url, { signal: abortCont.signal })
    		.then((res) => {
    			if (!res.ok) {
    				throw Error("Could Not Fetch the data");
    			}
    			return res.json();
    		})
    		.then((data1) => {
    			setData(data1);
    			setIsLoading(false);
    			setError(null);
    		})
    		.catch((err) => {
    			if (err.name === "AbortError") {
    				// does not update the "state"  // part of the useEffect Cleanup
    				console.log(" Fetch Aborted");
    			} else {
    				console.log("ERROR...  " + err.message);
    				setIsLoading(false);
    				setError(err.message);
    			}
    		});
    	// cleans up any unmounted errors
    	return () => {
    		// aborts any fetching errors
    		abortCont.abort();
    	};
    }, [url]);

    return { data, isLoading, error };

};

export default useFetch;

12.) so for every component, you will need to create the component file in the src folder ComponentFile.js in there, type sfc to get you started. if your component needs parameters, you will have to import useParams and add const { id } = useParams(); and update your fetch request with the id

then you will need to add the route to the App.js file
<Route path="/blogs/:id">
<BlogDetails></BlogDetails>
</Route>
(don't forget to import that component at the top of the App.js file)

then you will need to add the param id to the list file

import useFetch from "./useFetch";
const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);

<div className="blog-preview" key={blog.id}>
<Link to={`/blogs/${blog.id}`}>
<h2>{blog.title}</h2>
<p>Written by: {blog.author}</p>
</Link>

13.) FORMS IN REACT
setting up input fields and tracking the values (and state) in react
go to your component and in the return, enter the FORM tags - removing the action b/c it will be submitted a different way.

import { useState } from "react";
const [inputfieldname, setInputFieldName] = useState("");

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
<select
value={author}
onChange={(e) => {
setAuthor(e.target.value);
}} >

<option value="mario">mario</option>
<option value="yoshi">yoshi</option>
</select>
<button>Add Blog</button>
</form>

you can use an onClick event handler on the button or react to the submit event (in the form tag onSubmit = {handleSubmit}).

const handleSubmit = (e) => {
e.preventDefault();
// create an object to send to the JSON server
const blog = { title, body, author };

    	// Fetch API request
    	fetch("http://localhost:8000/blogs", {
    		method: "POST",
    		headers: { "Content-Type": "application/json" },
    		body: JSON.stringify(blog),
    	}).then(() => {
    		console.log("new blog added");
    	});
    };

CHECK THE CREATE file for handling isLoading problems and redirections
CHECK THE BLOGDETAILS file for deleting a blog

14.) Create a catch-all route for users who try to enter stuff thru the url.

on the APP.js file, AT THE BOTTOM of the routes section, add
<Route path="*">
<NotFound></NotFound>
</Route>

create a NotFound.js Component
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

THE END
