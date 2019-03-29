const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = arr => {
  'use strict';
  // change code below this line
  const squaredIntegers = arr
    .filter(e => Number.isInteger(e) && e > 0)
    .filter(e => e > 0)
    .map(e => Math.floor(e * e));
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
