function madLib(verb, adj, noun) {
  let v = verb.toUpperCase();
  let a = adj.toUpperCase();
  let n = noun.toUpperCase();

  return `We shall ${v} the ${a} ${n}`;
}

madLib("make", "best", "guac");

function isSubstring(str, word) {
  let words = str.split(" ");
  for(let i=0; i<words.length; i++) {
    if (words.includes(word)) {
      return true; 
    }
  }
  return false; 
}

isSubstring("time to program", "time");
isSubstring("Jump for joy", "joys");

function fizzBuzz() {
  // 3 and 5 are magic numbers 
  let res = [];
  for(let i=0; i<100; i++) {
    if (i%5 === 0 || i%3 ===0) {
      res.push(i);
    }
  }

  return res;
}

fizzBuzz();

let isPrime = (num) => {

  if (num < 2) {
    return false;
  }

  for(let i=2; i<num; i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return true;
}; 


function sumOfNPrimes(n) {
  let sum = 0;
  let count = 0;
  let i = 2;

  if (n < 1) {
    return 0;
  }

  while (count < n) {
    if (isPrime(i)) {
      console.log(i)
      sum += i; 
      count ++;
    } 
    i++;
  }
  return sum;
}

sumOfNPrimes(4);