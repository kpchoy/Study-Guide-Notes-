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