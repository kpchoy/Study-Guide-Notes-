- What are the benefits of a Javascript Closre?
  - allows data encapsulation, some data should not be directly exposed 

- Formallly define a Javascript closure 
  - combination of a function and the lexical envirnoment where it was declared 
  - allow function to access variables from an enclosing/ outer scope 
  - closure crated whenever define a function

- Give an example of a closure?
  - function sayHi(name){
  - var message = `Hi ${name}!`;
  - function greeting() {
  - console.log(message)
  - }
  - return greeting
}

- What is data encapsulaiton? 
  - some data should not be directly exposed 