- What are the steps for DFS on a graph?
  - stack
  - result 
  - hit each vertex, determine what lowest node to visit next, push onto stack, push also onto result 
  - if cant go further pop off stack and go back to see if other vertex can be visited 
  - all will be visited when all vertex are popped of the stack 

- What are the steps for BFS on a graph?
  - queue 
  - visited index 
  - starting vertex. find all the vertex connected, push each vertex onto queue and push into visited index 
  - once no more adjacent vertex, go to next vertex on queue. pop off vertex on queue
  - keep going to went through whole queue and queue is empty

- What supporting data structure might you use for BFS and DFS?
  - DFS use a stack 
  - BFs use a queue 

- BFS can be implemented using a queue and adding children to the queue every time an element is evaluated 
- BFS can work  by evaluating elements when they off the queue or when they enter the equeue
- BFS and DFS can be performed on an undirect graph where there is no concept of children

