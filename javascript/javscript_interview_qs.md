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

- what is the event loop, difference between callstack and task queue?
  - monitors call stack, checks if any work to be done on task queue
  - if call stack empty, task queue functions are dequeued and pushed onto stack 

END of trivia round 4

------

- explain ajax in as most detail as possible 
  - asynch javascript and xml 
  - can send a receive data asynchronously 
  - allows for webpages to change the content dynamically without need to reload entire page 

- describe event bubbling 
  - when event triggers on DOM elements, will attempt to handle event if listener is attached 
  - event is bubbled up to parent element, will attemp to handle event if listener attached 

- What is the difference between attribute and property?
  - attributes are defined on html markup 
  - properties are defnied on the DOM

- difference between `document load event` and `DOMContentLoaded`
  - DOMContentLoaded fired when initial HTML fully loaded and parsed
  - `window load` only fired once all the DOM resources and assets have loaded 
  