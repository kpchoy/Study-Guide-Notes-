- What are dynamically vs statically typed languages?
  - static
    - type checking at compile time, instead of run time
    - type of variable known at compile time, program must specify variable type
    - Java, C++
  - dynamic
    - type checking at run time, instead of compile time
    - type is associated with run time values, and not named variables
    - do not have to declare integer, boolean, symbol
    - Javascript Ruby

- Describe the DOM
  - document object model
  - standard for how to get, add, change, delete HTML elements

- Can we achieve block level scoping in JS
  - yes with let and const, as opposed to var
  ```javascript
  for (var i=0; i<10; i++) {
  // block scope for the for statement
  }
  console.log(i) // => 10 (why oh why)

  for (let i=0; i<10; i++) {
  // block scope for the for statement
  }
  console.log(i) // ReferenceError: i is not defined (D'oh!
  ```

- poetential pitfall of using: typeof bar === "object" to determine if bar is an object?
  - Javascript `null` is also considred an object
  - avoid by also checking that bar doesnt equa null
  - (bar !== null) && (typeof bar === "object)

- Are a and b undefined: var a = b = 3;
  - shortand for 
    - b = 3
    - a = b
  - b becomes a global object (no var)
  - a is undefined 

- What is significance of wrapping entire content of JS source file in a fucntion block?
  - Creates closure around entire contents of file 
  - creates private namespace 

- write a sum method that will work for both: console.log(sum(2,3)) and console.log(sum(2)(3))
  ```javascript
    function sum(a) {
      if (arguments.length === 2) {
        return arguments[0] + arguments[1];
      } else {
        return function(y) {
          return a + y;
        }
      }
    }
  ```
