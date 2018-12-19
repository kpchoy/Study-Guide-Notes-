class Cat {
  constructor(name) {
    this.name = name;
    this.owner = "Bob";
  }

  cuteStatement() {
    // console.log(`${this.owner} loves ${this.name}`);
  }
}

let janet = new Cat("Janet");
janet.cuteStatement();

function perChange(input) {

  let count = 0;
  let arr = input.split("");

  while (arr.length > 0) {
    for (let i=0; i<3; i++) {
      if (i === 0 && arr[0] === "P") {
        arr.shift();
      } else if (i === 1 && arr[0] === "E") {
        arr.shift();
      } else if (i === 2 && arr[0] === "R") {
        arr.shift();
      } else {
        count ++;
        arr.shift();
      }
    }
  }
  console.log(count);
  return count;
}

// console.log(perChange("SECRET"));


function newAlph(input) {
  let upperArr = input.toUpperCase().split("");
  let res = [];

  for(let i=0; i<upperArr.length; i++) {
    if (upperArr[i] === "A") {
      res.push("@");
    } else if (upperArr[i] === "B") {
      res.push("8");
    } else if (upperArr[i] === "C") {
      res.push("(");
    } else if (upperArr[i] === "D") {
      res.push("|)");
    } else if (upperArr[i] === "E") {
      res.push("3");
    } else if (upperArr[i] === "F") {
      res.push("#");
    } else if (upperArr[i] === "G") {
      res.push("6");
    } else if (upperArr[i] === "H") {
      res.push("[-]");
    } else if (upperArr[i] === "I") {
      res.push("|");
    } else {
      res.push(upperArr[i]);
    }
  }
  return res.join("");
}

console.log(newAlph("All your base are belong to us."));


function waitingTime(tickets, p) {
  // Write your code here
  let place = p;
  let count = 0;
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
      console.log(place)
      console.log(tickets[place])
      console.log(count)
      count++;
  }
  return count
}

function waitingTime(tickets, p) {
  // Write your code here
  let place = p;
  let count = 0;
  while (tickets[place] > 0) {
      console.log(tickets);
      tickets[0]--;
      let first = tickets.shift();
      tickets.push(first);
      console.log(tickets);

      
      place--;
      if (place < 0) {
          place = tickets.length-1;
      }
      console.log(place)
      console.log(tickets[place])
      console.log(count)
      count++;
  }
  return count 
}
