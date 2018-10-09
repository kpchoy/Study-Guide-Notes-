- What is a state tree in the context of Redux 
  - everything that changes in your application is contained in a single object called state tree 
- Why dont we want to modify our Redux state?
  - state is redundant (cannot be modified or written to), only way to change state tree is to dispatch an action 
- What is a pure function? Impure function?
   - pure funciton: return value depends on arguments, do not modify values passed to them 
   - impure functions: may call database, may have side affects, may overwrite values passed to them. 
- Describe in detail what a redux reducer is. What makes a pure function?
  - reducer 
    - a pure function
    - takes two arguments
      - current state of app
      - action to be dispatched 
    - returns next state of app 
    - must return current state for undefined actions 



- What is the role of the store in Redux?
  - stores whole state of the app in an immutable object tree 

- What does the subscribe method do in Redux?
  - adds a change listener, will be called anytime that an action is dispatched 
  