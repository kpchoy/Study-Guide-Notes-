- Bubbling principal 
  - when event happens on element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors 
- How can you stop event bubbling?
  - `event.stopPropagation()`
- What is the difference between `event.target` and `event.currentTarget`
  - `event.target` most deeply nested element that caused the event is called the `target` element 
  - `event.currentTarget` returns the element whose event listeners triggered the event 

- What does `stopImmediatePropagation` do?
  - stop bubbling and prevent handlers on current element from running, after it no other handlers run 
