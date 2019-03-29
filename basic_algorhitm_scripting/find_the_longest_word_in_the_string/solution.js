function findLongestWordLength(str) {
  return str.split(' ').sort((a, b) => {
    if (a.length < b.length) {
      return 1;
    } else if (a.length > b.length) {
      return -1;
    } else {
      return 0;
    }
  })[0].length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
