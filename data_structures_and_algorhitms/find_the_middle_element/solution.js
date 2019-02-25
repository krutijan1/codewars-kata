const gimme = function (inputArray) {
    // sort the array to get middle element as sortedArray[1]
    let sortedArray = inputArray.slice().sort((a, b) => a - b);
    // find the middle element index in original array
    return inputArray.indexOf(sortedArray[1])
};
