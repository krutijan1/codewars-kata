/**
 * @param {string} s
 * @return {string}
 */
const isPalindrome = function(s) {
  return (s === s.split('').reverse().join(''));
};

const longestPalindrome = function(s) {
  const result = [];
  let max = 0;
  let longest = '';

  for (let i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      const substring = s.slice(i, j);

      if (isPalindrome(substring)) {
        if (substring.length > max) {
          max = substring.length;
          longest = substring;
        }
      }
    }
  }
  return longest;
};
