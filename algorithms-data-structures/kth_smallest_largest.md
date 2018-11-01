- what is the best solution to this problem
  - sort the given array using O(nlogn) sorting algorithm 
  - Quickselect average O(n) time complexity pick a  pivot element.
  stop at the pivot where it is k'th smallest element , do not recur left and right sides of pivot,
  just recur one side depending on position of pivot
  
- compare using a min-heap and a max-heap to solve this problem 
  - min-heap create a Min Heap of given n elements and call extractMin() k times
