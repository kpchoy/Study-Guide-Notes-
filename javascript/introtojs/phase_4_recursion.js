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

// console.log(sumRec([1,2,3,4,5]));

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp-1);
}

// console.log(exponent(2,4));

function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr;
  }

  return arr.map((el) => {
    return deepDup(el);
  }); 
}

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  let mid = Math.floor(arr.length / 2);
  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] > target) {
    return bsearch(arr.slice(0,mid), target);
  } else {
    return mid + 1 + bsearch(arr.slice(mid+1), target);
  }
}

console.log(bsearch([1,2,3,4,5,6,7,8], 7));