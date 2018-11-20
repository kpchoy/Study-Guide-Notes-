- Actions
  - payloads of info that send data from app to store

- Reducers
  - designing the state shape 
  - how state changes in response to actions sent to the store 
  - pure function that takes the previous state and an action, and returns the next state 
  - should never 
    - mutate args
    - perform side effects like API calls 
    - call non-pure functions 

- What are presentational components?
  - how things look
  - receive data and callbacks through props 
- container componenets
  - container is a React component that uses store.subscribe()
  - reads part of Redux state tree, supplies presentational component it renders
  - use redux library connect() function to prevent unnecessary re-renders 
- passing the store
  - `Provider` used to make store available to all container components in the application 

- Explain imperative vs Declarative in React 

- Higher order components 
    - what is the use case for higher order components?
        - explicit state 
    - what is a higher order function
        - function that returns a function 
    - what is a higher order component
        - function that returns a component 
        - share behaviro across an app 
    - how do HOCs replace classical inheritance
        - state passing 
