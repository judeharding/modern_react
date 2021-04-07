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
