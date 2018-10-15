- What is a heap?
  - a binary tree with two special properties
    1) must have all its nodes in specific order
    2) its shape must be complete 
- What are the constraints of (any type of) Heap?
  - must be a complete tree, every node of tree needs to be filled, however last level is exception. Last level alwasy needs the left most nodes filled first 
  - parent node must be greater than or equal to child nodes, `or` parent node less than or equal to child nodes 
- minheap 
  - all parent nodes less than or equal to child nodes 
  - min val is root node 
- maxheap 
  - every parent node greater than child node 
  - max value is root node
- What type of Data Structure might we use to implement a heap?
  - an array 
    - root node at index 0 of an array  
  - queue 

- What is the formula for getting the left child of a Heap root node? Right child?
  - left child - 2i + 1
  - right child - 2i + 2

- What is a Priority Queue?
  - queue data structure 
  - every item has a priority associated with it
  - item with higher priority dequeued before lower priority 
  - two items with equal prioity dequed based on order in queue
  