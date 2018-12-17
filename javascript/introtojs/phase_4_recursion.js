function range(start,end) {
  if (start == end) {
    return [start];
  }

  let r = range(start, end-1);
  r.push(end);

  return r; 
}

// console.log(range(1,10));

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let last = arr.pop();
  return sumRec(arr) + last;
}

console.log(sumRec([1,2,3,4,5]));