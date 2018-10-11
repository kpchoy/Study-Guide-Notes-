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