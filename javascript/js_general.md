# == vs === ?
- What is the risk we face when using == vs === ?
  - == checks for equality with coercion 
  - === checks for equality wihtout coercion- strict equality 
------
# this 
- when is the value of `this` evaluated?
  - the value of `this` is evaluate during the run-time
  - this evaluates the value of the ThisBinding of the current execution context 
- How does `use strict` affect the value of `this`?
  - `this` in an anonymous function is is undefined when using strict 
- without `use strict`, what is the value of `this` inside a named or anonymous function? 
  - in non-strict mode value of `this` will be the global  object  
- what is the value of `this` in method style syntax?
  - to access an object, a method can use `this` keyword. 
- refers to context 
- bind will pass context to first parameter 

---

# new keyword 

- What does the new keyword do in Javascript?
  - creates a new object 
  - sets objects prototype to be prototype of constructor function
  - executes constructor function with `this` as newly created object 
  - returns created object 

- What type of function is invoked with the new keyword? What does this function return?
  - functions invoked with new keyword are constructor functions
  - this function returns created object 

# Event Delegation 
- What is event delegation? 
  - a lot of elements handled in similar way. Put a single handler on common ancestor 

# Error Handling 
- What are the steps of a `try..catch` block in Javascript?
  - First, the code in try {...} is executed.
  - if no errors, catch(err) ignored
  - if error occurs, try execution is stopped, control flows to beginning of catch(err). The err variable has error object with details 
 
- What type of errors to `try..catch` blocks work for?
  - only works for runtime errors 
- When creating a custom error, what attributes should it have?
  - our errors should support basic error properties like message name. HttpError objects may have statusCode property with value like 404, 403, 500

# DOMContentLoaded
- What's the difference between the DOMContentLoaded and load event triggers?
  - DOMContentLoaded - document has finished loading (but not its dependent resources)
  - load - a resource and its dependent resources have finished loading (ex images, styles, etc) 

# Variables: let const and var 
- Discuss the differences between let, const, and var. What are their respective scopings?
  - let and const are not hoisted and block-scoped, cruly braces define scope variables declared in 
  - const cannot be reassigned, but properties can be changed 
  - var is hoisted 

# strict mode
- What happens when you enable strict mode in javascript?
  - easier way to write "secure" javascript 
  - you cannot use undeclared variables 
  - deleting a variable or object not allowed 
  - deleting funciton not allowed 
  - duplicating a parameter not allowed 

# Rest and spread
- How does the rest/spread operator work in JS
  - REST: `...args` the `...` mean gather remaining paramters into an array of `args`. The `...rest` must be last argument 
  - Spread: `...arg` expands an interable object `arr` into the list of arguments 
    - let arr1 = [1, -2, 3, 4];
    - let arr2 = [8, 3, -8, 1];
    - alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

# bind 
 - What problem does bind solve in Javascript? How does it accomplish this?
   - in javascript it is easy to lose `this`. once a method is passed somewhere spearately from the object `this` is lost 
   - allows function to have fixed `this`
   - `func.bind(context)` is a special function passes the call to `func` setting `this=context`
 - What is the syntax for passing arguments to the bind function?
   - `func.bind(context)`

# pass by reference 
- Does Javscript by by reference or value?
  - objecgts are passed by reference, primitives are passed by value 

# length
- what does the `length` attribute refer to on a Function in Javascript 
  - returns the number of function parameters 

# Assign variables 
- Does JS assign variables by value or by reference?
  - objects are passed by reference, primitives passed by value 

# webpack vs babel
- what is the difference between webpack and babel
  - babel is the transpiler (ES6 to ES5)
  - webpack is a module bundler 

# promise vs asyn/await
- what is the difference between async/await vs promise
 - async/await does same thing as promise, but with cleaner markup 

# types and coercion 
- What are the 7 different JS types?
  - null, undefined, boolean, number, string, object, symbol 
- Explain the difference between + and -*/ in JS when it comes to coercion.
  - (+) sign works for both number adddition and string concatenation 
  - *-/ operators exclusive for numeric operations 

# pure function 
- state doesnt change 
- does not attempt to change inputs 
- always return the same result for the same inputs

# prototypal inheritance
-  How does prototypal inheritance work?
  - objects inherit directly from other objects 
  - prototype delegation 
  - concatenative inheritance 
  - functional inheritance 

- how do you do prototypal inheritance

// new
dog.prototype = Object.create(animal.prototype)

// old
surrgate(){}

- classical inher vs protopyal inheritance

# promise 
- What is a Promise?
  - allows "producing code" to take whatevever time it needs to produce the promised result, and the "promise" makes result available to all subscribed code when it is ready 
- what arguments does the Promise object take?
  - resolve/ reject 
- what arguments does the resolve function take?
  - value, promise, thenable
- What arguments does .then take?
 explain .then in the context of the callback queue
  1) function runs when promise is resolved
  2) function runs when promise is rejected 
  - passed function put on microtask queue that is ran when the queue is emptied 

# promise chaining 
- What is Promise Chaining?
  - chain of `.then` handlers 
- Explain what is returned by .then
  - `promise.then` returns a promise that the next `.then` can be called on 
- How can you suspend the execution of a .then statement?
  - if returned value is a promise, further execution is suspended until the promise settles 

# promise api 
- when would you want to use Promise.resolve()?
  - returns a resolved promise with the given `value`
  - used when we already have a value, but want it to be "wrapped" in a promise
- explain how Promise.all works?
  - to run many promises in parallel and wait till all of them are ready 
- what happens when you pass a non-promise object in the iterable you pass to Promise.all?
  - it is wrapped in a `Promise.resolve`
- What is Promise.race?
  - takeas an iterable of promises, instead waiting for them to finish, waits for first result and goes on with it

# async/await 
- what does the async keyword do?
  - `async` before a function means a function always returns a promise
- what does the await keyword do?
  - await makes JS wait until that promise settles and returns its result 
- what does console.dir() do?
  - way to see all the properties of a specified JS object by which developer can easily get properties of the object. 

# same orign policy
- What is same-origin policy? When is it not enforced?
  - security mechanicsm restircts how document or script loaded from one origin can interact with resource from another origin.
  - not enforced trust zones, both domains highly trusted
- What is JSNOP
  - JSON with padding, javascript pattern to request data by loading a `script` tag, bypasses same-origin policy. 

# function delcaration vs function expression 
// function declaration
  - function example() {
    - console.log("A");
    - setTimeout(function(){console.log("C")}, 0)

  - }
// hoisted


// expression
 - let example2 = function() {}
 - not hoisted