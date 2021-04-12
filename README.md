Testing Github
https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d

vid #2

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
