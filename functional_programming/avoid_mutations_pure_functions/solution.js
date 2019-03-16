// the global variable
var fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

let newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
