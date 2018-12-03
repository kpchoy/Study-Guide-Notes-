- What is the best way to prevent ane vent form bubbling to the next parent 
  - event.stopPropogation()
- What are the proper keywords for error handling in JS
  - "try...catch"
- calling a function with the `new` keyword changes the behavior of the func, having it act as a constructor. Result of calling a function with the `new` keyword
  - creating a new object
  - setting new object's prototype to be the prototype of the function 
  - executing the function with new object as context 
  - returning the new object 

- what is NOT allowed when you declare "use strict" in JS?
  - using a variable that has not yet been declared
  - deleting variables and functions 
  - writing to get only property of an object
  - using arguments as variable names

- What does the "length" property of the Javascript Function object return?
  - the number of args taken by the function 

- What are the differences between Rest Parameters and the Spread Operator 
  - rest parameters are used in a function definition, the spread operator is used in the function call 
  - Rest parameters collect a list of parameters into an array, spread operator expands arrays and iterable objects into a list of args 

- When inspecting a MouseEvent object, which of the following do `target` and `currentTarget` represent?
  - target is element the mouse is on
  - currentTarget is the element the listener is set to 

- What is a benefit of AJAX requests 
  - Allows a front end engineer to make request to a server without reloading the page 

------
# Week 4 

- What data types in JS are strictly pass-by-value
  - numbers
  - strings
  - booleans
  - undefined 

- which of these are valid JS primitives
  -  number 
  - null 
  - symbol
  - string 

- what does the following code snippet return: "-9\n" - 5 + "1" + 0
  - "-1410"

- What does the global object refer to in JS
  - the prototype object that all objects in JS inherit from when created 

# Week 5

- What are benefits of using Async/Await
  - easy to enforce order of execution after asynch functions
  - creates clear separation of asynch tasks 

- What do the keywords async and await actually do in JS?
  - async requires function to awlays return a promise
  - await forces JS to wait until a promise resolves 

- Promises contain two internal properties, what are they?
  - resolve and reject

- How do we access the DOM in js
  - through the "document" object 
  