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

npx create-react-app new-app-name

delete the REACT stuff you don't want like logo files and odd components.

add some index css for the entire SPA.

your index.html feeds from App.js component.

the App.js component gets its info from Home.js component.

you work in the Home.js component.

EVERY little thing in your project is probably a component. and you can have components within components. ex. Navbar is made up of all of the links in your navbar.

when creating a component, type sfc to get a template of a stateless functional component.

make sure you import your child components into the Home.js component.

When working with JSON, you will need to fix your Home.js component...

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

you will also need to create a new file called useFetch.js
//imports
import { useState, useEffect } from "react";

// creating a custom hook with the prefix "use"
const useFetch = (url) => {
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

    useEffect(() => {
    	console.log("use effect ran");
    	fetch(url)
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
    			console.log("ERROR...  " + err.message);
    			setIsLoading(false);
    			setError(err.message);
    		});
    }, [url]);

    return { data, isLoading, error };

};

export default useFetch;
