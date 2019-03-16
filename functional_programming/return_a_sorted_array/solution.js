let globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  const newArray = [].concat(arr);
  return newArray.sort();
}

nonMutatingSort(globalArray);
