// Setup
var myObj = {
  gift: 'pony',
  pet: 'kitten',
  bed: 'sleigh'
};

function checkObj(checkProp) {
  // Your Code Here

  return myObj[checkProp] ? myObj[checkProp] : 'Not Found';
}

// Test your code by modifying these values
checkObj('gift');
