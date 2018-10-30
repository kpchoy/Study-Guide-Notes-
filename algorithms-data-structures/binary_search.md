- why is binary search logarithmic time?
  - assumes an array is already sorted
  - repeatedly divides the search interval in half 
- If an element is smaller than its right neighbors, explain why there is definitely a peak to the right.
  - it is the largest element in the array 

- Explain how you can still find an element in log time when the array is rotated
  - find pivot, only number where next number is smaller than itself  
  - divide two sub arrays call bsearch 
  - if element greater than 0th element search in left array