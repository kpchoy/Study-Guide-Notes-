// # Your last JavaScript (Node) code is saved below:
// # console.log(0.1 + 0.2);
// # console.log(0.1 + 0.2 == 0.3);


// # //2d array matrix unequal height width 0s ands 1s,
// # // 0 land, 1 river
// # // array of sizes of all rivers in matrix 



// # [
// #   [1, 0, 0, 1, 0],
// #   [1, 0, 1, 0, 0],
// #   [0, 0, 1, 0, 1],
// #   [1, 0, 1, 0, 1],
// #   [1, 0, 1, 1, 0]
// # ]


// # => [1, 2, 2, 2, 5]


// # keep track of the positions in the matrix see if any 1s are adjacent
// # keep a running total all the 1s and their positions 
// # push them into an array 


const rivers = function (map) {
  let result = [];
  let counter = 1;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {

      let bottom = i + 1;
      let right = j + 1;

      if (typeof bottom == "undefined") {
        continue;
      } else if (typeof right == "undefined") {
        continue;
      } else if (map[i][j] == 0) {
        continue;
      } else if (map[bottom][j] == 1) {
        counter ++;
        adjacent(bottom, j, map, counter);
      } else if (map[i][right] == 1) {
        counter ++;
        adjacent(i, right, map, counter);
      }

      result.push(counter);

      counter = 1;
      // if there were no more 1s next to each other
      // push the river length into result
    }

    // result 
  }

  return result;
};

function adjacent(i, j, map, counter) {
  let bottom = i + 1;
  let right = j + 1;

  if (typeof bottom == "undefined") {
    return counter;
  } else if (typeof right == "undefined") {
    return counter;
  } else if (map[bottom][j] == 1) {
    counter++;
    adjacent(bottom, j, map, counter);
  } else if (map[i][right] == 1) {
    counter++;
    adjacent(i, right, map, counter);
  }

  return counter;
}

console.log(rivers( [
[1, 0, 0, 1, 0],
[1, 0, 1, 0, 0],
[0, 0, 1, 0, 1],
[1, 0, 1, 0, 1],
[1, 0, 1, 1, 0]
 ]));

