const merge = (arr1, arr2) => {
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    for (let i = 0; i < arr1Length; i++) {
      if (arr1[i] > arr2[0]) {
        [arr1[i], arr2[0]] = [arr2[0], arr1[i]];
        let first = arr2[0];
        let j;
        for (j = 1; j < arr2Length && arr2[j] < first; j++) {
          console.log("----");
          console.log(arr2);
          arr2[j - 1] = arr2[j];
          console.log(arr2);

        }
        arr2[j - 1] = first;
        console.log(arr2);
        console.log("----");
      }
    }
};

let arr1 = [1, 4, 7, 8, 10];
let arr2 = [2, 3, 9]

console.log(arr1, arr2)
merge(arr1, arr2)
console.log(arr1, arr2)

let foo = function (input1) {
  let counter = 0;
  
  let b = function (input2) {
    let c = input1 * input2;
    counter ++;    
    console.log(c + counter);

  }
  
  return b;
};


let bar = foo(2);
bar(3); // 7
bar(5); // 12
bar(10); // 23
