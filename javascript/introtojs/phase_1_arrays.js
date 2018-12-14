Array.prototype.uniq = function() {
  let res = [];
  for (let i=0; i<this.length; i++) {
    if (!res.includes(this[i])) {
      res.push(this[i]);
    }
  }

  return res; 
};

// console.log([1,2,3,3,4,4,4,5].uniq());

Array.prototype.twoSum = function () {
  let res = [];
  for(let i=0; i<this.length; i++) {
    for(let j=i+1; j <this.length; j++) {
      if (this[i] + this[j] === 0) {
        res.push([i,j]);
      }
    }
  }
  return res;
};

// console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.transpose = function () {
  let res = Array.from(
    { length: this[0].length },
    () => Array.from({ length: this.length })
  );

  for(let i=0; i<this.length; i++) {
    for(let j=0; j<this[i].length; j++) {
      res[j][i] = this[i][j];
    }
  }

  return res;
};

console.log([[1,2,3],[4,5,6],[7,8,9]].transpose());