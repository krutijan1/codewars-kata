// the global Array
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (const item of this) {
    if (callback(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

let new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
