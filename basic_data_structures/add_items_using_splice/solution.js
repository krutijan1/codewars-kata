function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0, 1, 'DarkSalmon');
  arr.splice(1, 1, 'BlanchedAlmond');
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurqoise',
    'FireBrick'
  ])
);
