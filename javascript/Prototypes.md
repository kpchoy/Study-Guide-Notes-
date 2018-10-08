- Give a high level overview of what an object's prototype represents
  - all js objects inherit properties and methods from a prototype 
  - Object.prototype is on top of the prototype inheritance chain


- What are the differences between the __proto__ and prototype attributes?
  - __ proto __ : is the actual object used to resolve methods 
  - prototype : is used to build __ proto __ when you create an object with new 


- What happens when we do or don't explicity set an object's prototype?
  - when object is created with `new F()` objects `[[Prototype]]` is set to `F.Prototype`

- What is an object's default prototype?
  - an object with only property constructor that points back to the function itself 

- What are the valid values for an object's prototype?
  - either object or null 

- functions will automotically create prototype objects that have the function itself set as object.constructor 

- the `new` keyword can be applied to all functions tht arent arrow functions, even if the function does not return an object 

