function checkPositive(arr) {
  return arr.some(e => e > 0);
}

checkPositive([1, 2, 3, -4, 5]);
