- What is the time complexity of inserting into a sorted singly-linked LL? How can you do it in one pass only
 - if linkedlist empty make node as head and return it
 - if val node insert < val node head. make it the head
 - in a loop find node with val greater than (val insert node), and place (insert node) before (node with greater val)
 - O(n) use double pointers 
- What do you have to do to delete a node from a list?
  - when node to be deleted is first node. copy data of next node to head node and delete the next node
  - else find previous node and changing next of previous node 