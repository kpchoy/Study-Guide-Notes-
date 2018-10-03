- What are the steps for DFS on a graph?
  - stack
  - result 
  - hit each vertex, determine what lowest node to visit next, push onto stack, push also onto result 
  - if cant go further pop off stack and go back to see if other vertex can be visited 
  - all will be visited when all vertex are popped of the stack 

- What are the steps for BFS on a graph?
  - queue 
  - result 
  - starting vertex. find all the vertex connected, push each vertex onto queue and push into result 
  - once no more adjacent vertex, go to next vertex on queue. pop off vertex on queue
  - keep going to went through whole queue and queue is empty

- What supporting data structure might you use for BFS and DFS?
  - DFS use a stack 
  - BFs use a queue 

