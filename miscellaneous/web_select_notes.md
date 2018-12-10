- What is true about WebSocket protocall
  - protocall provides communcaiton over TCP connection 
  - enable communcaiton between browser and server with low overheads
  - enables streams of messages on top of TCP connection 

- What styles can enable gpu-accelerated re-rendering 
  - css3 transitions 
  - css3 3d transforms
  - canvas drawing 
  - WebGL 3d drawings 

- why does the following quirk apear in JS: console.log(.1 + .2)=0.30000004
  - All numbers are IEEE754 floating point numbers
  - binary nature of their encoding = some decimals cannot be represented with perfect accuracy 

- Do two system threads in the same process share the same call stack and heap space?
  - threads have independent call stacks 
  - threads share all other segments 
    - data segments(global vars)
    - address space 
    - code segment 
    - the heap 

- What is the difference between a tree and a directed acyclic graph 
  - tree - one path between two nodes
  - dag - one or more parents / paths between two nodes 