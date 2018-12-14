Array.prototype.bubbleSort = function () {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i=0; i<this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        [this[i], this[i+1]] = [this[i+1], this[i]];
        sorted = false;
      }
    }
  }

  return this;
};

// console.log([5,4,7,2,1].bubbleSort());

String.prototype.substrings = function () {
  let res = [];

  for(let i=0; i<this.length; i++) {
    for (let j=i+1; j <= this.length ; j++) {
      res.push(this.slice(i,j));
    }
  }
  return res; 
};

console.log("abcdef".substrings());