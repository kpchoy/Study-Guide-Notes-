# Immediately Invoked Function Expressions 

- When is using an IIFE necessary?
  - function invoked immediately after define it 
  - used to create new variable scope 
  - enables to attach private data to funct 
  - creates fresh environments 
  - avoids polluting global namespace 

- What is the syntax for an IIFE?
  - surrounding paranthesis prevents from treating as func declaration 
  - final paranthesis executing function expresssion 

- example: 
  - (function() {console.log("pick me!")})();