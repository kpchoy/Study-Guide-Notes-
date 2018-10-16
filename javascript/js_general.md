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
