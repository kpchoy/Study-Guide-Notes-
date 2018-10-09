- What is a base case in recursion? Why do we need one? Do we always need one?
   - a known solution to the problem  
   - each recursive algorithm must have one base case 
   - without a base case the function will never return, and will run infinetely resulting in a stack overflow
-  What exactly is a Stack Overflow?
   - if a base case is not reached or defined may result in stack overflow 
   - when program uses more space than is available on the callstack 
   - example infinite recursion 
- Describe direct and indirect recursion
  - direct recursion - method invokes itself 
  - indirect recursion - method invokes another method 

- What is tail call recursion? Why is it helpful, if at all?
  - tail recursive when recursive call is last thing executed by function 

- Discuss advantages/disadvantages of recursion
  - dis - recursion is slower, takes up more of the stack 
  - adv - tree traversal 

- How is memory allocated during recursive function calls?
  - memory allocated on the stack, each recursive call pushes stack frame onto stack, once base case is hit stack frames are popped off the stack 