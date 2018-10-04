- event loop in javascript 
  - asynch call backs 
  - items are pushed onto the event loop 
  - has to wait til stack is clear before it can push callback onto the stack 


- what is the difference between the memory heap and call stack in javascript?
  - memory allocation 
    - stack used for static memory allocation 
    - heap used for dynamic memory allocatin 
  - variables 
    - stack- variables store directly to the memory access is very fast
    - heap- memory allocated at runtime, accessing memory is bit slower
  - access 
    - stack- LIFO order 
    - heap- can be accessed randomly, more complex to track a heap 

- what is one problem with programming languages that a fully single-threaded.

- single-threaded: processing 1 command at a time 

- setTimeout value is minimum execution, however, because js event queue it might take longer because it needs to wait behind other items in event que

----

- Is JS a single-threaded language?
  - Javascript is single threaded 
  - JS asynchronous events are possible through the event loop 