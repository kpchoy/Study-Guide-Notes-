- What are the steps for Counting Sort? What is the time complexity?
  1) take a count array to store the count of each unique object 
  2) modify count array, each element, at each index stores sum of previous counts 
  3) modified count array indicates position of each object in output sequence 
  4) output each object from input sequence followed by decreasing its count by 1
  - time complexity: O(n+k)
    - n number of elements in input
    - k range of input 
