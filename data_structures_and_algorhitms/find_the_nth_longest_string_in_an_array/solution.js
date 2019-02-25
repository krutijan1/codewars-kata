function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function longest(arr, n) {
  let len = arr.length;
  let stop = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 0, stop = len - i - 1; j < stop; j++) {
      if (arr[j].length < arr[j + 1].length) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr[n - 1];
}
