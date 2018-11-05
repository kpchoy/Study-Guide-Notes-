- explain how this can be solved in linear time?
  1) initialize a variable as infinite (diff used to store the difference between pair and x) Need to fine minimum diff
  2) initialzize two index variables 1 and r in given sorted array 
    - initizlize first to the leftmost index: l = 0 
    - initialize second to rightmost index r = n - 1 
  3) loop while l < r
    - if abs( arr[l] + arr[r] - sum) < diff then update diff and result 
    - else if(arr[l] + arr[r] < sum ) then l++ 
    - else r-- 