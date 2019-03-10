function symDiff(arrayOne, arrayTwo) {
  const result = [];

  arrayOne.forEach(function(item) {
    if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
      result.push(item);
    }
  });

  arrayTwo.forEach(function(item) {
    if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
      result.push(item);
    }
  });

  return result;
}

function sym(...args) {
  // Apply reduce method to args array, using the symDiff function
  return args.reduce(symDiff);
}

sym([1, 2, 3], [5, 2, 1, 4]);
