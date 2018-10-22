# == vs === ?
- What is the risk we face when using == vs === ?
  - == checks for equality with coercion 
  - === checks for equality wihtout coercion- strict equality 
------
# this 
- when is the value of `this` evaluated?
  - the value of `this` is evaluate during the run-time. can be anything
- How does `use strict` affect the value of `this`?
  - `this` in an anonymous function is is undefined when using strict 
- without `use strict`, what is the value of `this` inside a named or anonymous function? 
  - in non-strict mode value of `this` will be the global  object  
- what is the value of `this` in method style syntax?
  - to access an object, a method can use `this` keyword. 

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

