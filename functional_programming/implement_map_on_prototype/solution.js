// the global Array
let s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  let newArray = [];

  for (const item of this) {
    newArray.push(callback(item));
  }

  return newArray;
};

let new_s = s.myMap(function(item) {
  return item * 2;
});
