function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function countInversions(arr) {
  let inversions = 0;
  let len = arr.length;
  let stop = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 0, stop = len - i - 1; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        // number of inversions is number of swaps needed
        inversions += 1;
      }
    }
  }

  return inversions;
}
