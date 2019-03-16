function checkPositive(arr) {
  return arr.every(e => e > 0);
}

checkPositive([1, 2, 3, -4, 5]);
