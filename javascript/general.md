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