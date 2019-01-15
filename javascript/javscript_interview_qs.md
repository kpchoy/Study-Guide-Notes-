- https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/javascript-questions.md#whats-the-difference-between-an-attribute-and-a-property

- explain event delegation
  - add event listeners to parent element instead of decending elements 
  - event bubbling - listener will fire when event on decendant is triggered 

- explain how this works in javascript 
  - context 
  - if new keyword is used when calling a func, this inside the function is a brand new object 

- explain how prototypal inheritance works 
  - all objects have a prototype 
  - when property accessed on object and not found, js will look at the prototype of prototype

- undefined vs null
  - undefined - declared variable, but not set a value 
  - null variabel explicity assigned null

- what is a closure and how/why would you use one ?
 -  refers to scope 
 - functions that have access to enclosing functions variables
 even after outer func returns 
- why would you use?
  - data encapsualtion 
  - currying 

- what is typical use case for anonymous functions 
  - setTimeout(function() {
  - console.log('Hello world!');
  - }, 1000);
  - used in IIFE, to encapsulate local variables 

- What is the difference between ...call and ...apply?
  - both used to invoke functions, where first param is value of this within func 
  - call takes comma seperated arguments
  - apply takes array of arguments 

- explain bind 
  - easy to loose context of this
  - binding value of this in methods of classes want to pass into other functions 

- explain difference between synchronous and async functions
  - synchronous functions are blocking async funcs are not
  - sync: functions complete before next statement runs, program evaluated in order of statements 
  - asyn: execuation continues to next line after asyn function invoked, callback invoked after asyn func complete and call stack is empty.