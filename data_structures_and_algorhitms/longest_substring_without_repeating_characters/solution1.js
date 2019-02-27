const allUnique = function(s, start, end) {
  const set = new Set();

  for (let i = start; i < end; i++) {
    const ch = s.charAt(i);
    if (set.has(ch)) return false;
    set.add(ch);
  }

  return true;
};

const lengthOfLongestSubstring = function(s) {
  let n = s.length;
  let ans = 0;

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j <= n; j++)
      if (allUnique(s, i, j)) ans = Math.max(ans, j - i);

  return ans;
};
