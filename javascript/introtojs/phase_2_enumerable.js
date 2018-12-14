Array.prototype.myEach = function (cb) {
  for (let i=0; i<this.length; i++) {
    cb(this[i]);
  }

};
const NUMS = [1, 2, 3, 4, 5];

Array.prototype.myMap = function(cb) {
  let res = [];
  for (let i=0; i<this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};

// console.log(NUMS.myMap( num => num * num ));

Array.prototype.myReduce = function(acc, el) {
  let res = el;
  for (let i=1; i<this.length; i++) {
    res += acc(this[i]);
  }
  return res;
};


Array.prototype.myReduce = function (func, initialValue) {

  let arr = this;

  if (initialValue === undefined) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }

  let result = initialValue;

  arr.myEach(el => result = func(result, el));

  return result;
};