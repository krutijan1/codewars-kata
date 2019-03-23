const names = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home!'
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return 'Hole-in-one!';
  }
  if (strokes <= par - 2) {
    return 'Eagle';
  }
  if (strokes === par - 1) {
    return 'Birdie';
  }
  if (strokes === par) {
    return 'Par';
  }
  if (strokes === par + 1) {
    return 'Bogey';
  }
  if (strokes === par + 2) {
    return 'Double Bogey';
  }
  if (strokes >= par + 3) {
    return 'Go Home!';
  }
  return 'Change Me';
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
