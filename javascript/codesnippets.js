//What is the ouput of the following function, given arguments player = {score:10}, others=[{score:60},{score:40}]

function isWinner(player,others) {
  var highest=0;
  for(var i=0, n=others.length; i<n; i++) {
    var player = others[i];
    if(player.score>highest) {
      highest=player.score
    }
  }
  console.log(player);
  return player.score>highest 
}

//answer : {score:40}, false 

//what is the output of the following snipet?
  function parent() {
    var hoister = "im a variable";
    function hoisted() {
      return "im a function";
    }
    return hoisted();
  }
  console.log(parent());

//answer: im a function 


// what is the console.log
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// answer: 1
// the function a creates local scope and a remains set to 1

//hoisting
function foo(){
  function bar() {
      return 3;
  }
  return bar();
  function bar() {
      return 8;
  }
}
alert(foo());
// return 8 because 8 is hoisted, but comes after the 3


// hoisting 
function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
      return "I'm a function";
  }
  return hoisted(); 
}
console.log(parent());
// typererror hoisted is not a function 
// function is hoisted, but then hoisted is set to string
// hoisted is therefore not a function

// hoisting 
var myVar = 'foo';
(function() {
  console.log('Original value was: ' + myVar);
  var myVar = 'bar';
  console.log('New value is: ' + myVar);
})();
// original value was undefined. New value is bar.
// declare myVar in the function 