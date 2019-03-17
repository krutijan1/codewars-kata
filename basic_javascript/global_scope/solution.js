// Declare your variable here

var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = '';
  if (typeof myGlobal != 'undefined') {
    output += 'myGlobal: ' + myGlobal;
  }
  if (typeof oopsGlobal != 'undefined') {
    output += ' oopsGlobal: ' + oopsGlobal;
  }
  console.log(output);
}
