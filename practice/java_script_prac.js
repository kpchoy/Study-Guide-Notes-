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

// zig zag pattern 
var convert = function(s, numRows) {
  var result = [];
  var step = 1, index = 0;
  for(var i = 0; i < s.length; i++){
      if(result[index] === undefined){//'undefined' will be put into string without this
          result[index] = '';
      }
      result[index] += s[i];
      if(index === 0){
          step = 1;
      }else if(index === numRows - 1){
          step = -1;
      }
      index += step;
  }
  return result.join('');
};

function waitingTime(tickets, p) {
  // Write your code here
  let place = p;
  let count = 0;

  
  if (tickets[place] === 1 && place === 0) {
      return 1;
  }

  while (tickets[place] > 0) {
      console.log(tickets);
      tickets[0]--;
      let first = tickets.shift();
      if (first !== 0) {
          tickets.push(first);
      }

      console.log(tickets);
      place--;
      if (place < 0) {
          place = tickets.length-1;
      }
      count++
      console.log("place")
      console.log(place)
      console.log("tik place val")
      console.log(tickets[place])
      console.log("count")
      console.log(count)
      if (place === 0 && tickets[place] === 1) {
          count++;
          return count;
      }
  }
  return count 
}

