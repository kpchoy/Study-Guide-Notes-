- In which order do the React Lifecycle methods(including the optional ones) run? 
  - componentWillMount 
    - app conifg in your root component

  - componentDidMount
    - starting AJAX calls to load in data for your component
  
  - componentWillReceiveProps 
    - acting on particular prop changes to trigger state transitions
    - compare next state to current state 

  - shouldComponentUpdate 
    - controlling exactly when your component will re-render 

  - componenetWillUpdate 
    - used instead of componenetWillReceiveProps on a componenet that also has shouldComponenetUPdate 

  - componentDidUpdate 
    - updating the DOM in response to prop or state changes 

  - componentWillUnmount 
   - cleaning up any leftover debris from your component 
  
- In which lifecycle methods should you make asynchronous fetches for data?
  - componentDidMount

- in which lifecycle methods can you call setState?
  - componentDidMount 
  - compoenentWillReceiveProps 
  - componentDidUpdate 

-  Give one explanation for why we have to make AJAX requests in componentDidMount
   - cant guarantee that a ajax request will not resolve before component mounts

- Explain Context in React
  - pass data through component tree without having to pass props manually at every level 


- What does the <Provider> component do?
  - allows Consumer to subscribe to context changes 
  - accepts  `value` prop to be passed down to Consumers

- phases of React component life cycle
  - Mounting 
    - loading of components onto the DOM
    - methods called:
      - constructor 
        - set up initial state and components
        - render 
        - componentDidMount
          - Where API calls should be made
  - Updating 
  - Unmounting