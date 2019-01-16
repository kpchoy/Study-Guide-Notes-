console.log("hello")

let input = [
  "5",
  "https://www.wikepidea.org/",
  "https://www.hackerearth.com/",
  "https://www.google.com/",
  "https://www.hackerearth.com/",
  "https://www.hackerearth.com/"
];

function sortUrls (urls) {
  let hash_map = {};


  for (let i=1; i<urls.length; i++) {
    let url = urls[i].slice(12);
    if (!hash_map[url]) {
      hash_map[url] = 1;
    } else {
      hash_map[url] ++;
    }
  }

  let keys = Object.keys(hash_map);
  // console.log(keys)
  let res = [keys.length];

  keys.sort(function(a,b) {
    return hash_map[b] - hash_map[a];
  });
 
  // console.log(keys);
  // console.log(res);
  // console.log(res.concat(keys));
  return res.concat(keys);
}

// console.log(sortUrls(input));

function fizzBuzz() {
  let res = [];
  for (let i=0; i<100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      res.push("fizzbuzz");
    } else if (i % 3 == 0) {
      res.push("fizz");
    } else if (i % 5 ==0) {
      res.push("buzz");
    } else {
      res.push(i);
    }
  }

  return res; 
}

console.log(fizzBuzz())