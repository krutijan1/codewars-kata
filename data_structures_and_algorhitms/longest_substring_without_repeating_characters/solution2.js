const lengthOfLongestSubstring = function(s) {
  let n = s.length;

  const set = new Set();

  let ans = 0;
  let i = 0;
  let j = 0;

  while (i < n && j < n) {
    if (!set.has(s.charAt(j))) {
      set.add(s.charAt(j++));
      ans = Math.max(ans, j - i);
    } else {
      set.delete(s.charAt(i++));
    }
  }
  return ans;
};
