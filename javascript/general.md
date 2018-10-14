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