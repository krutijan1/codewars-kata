/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const mappings = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);

    if (mappings[c]) {
      const topElement = stack.length === 0 ? '#' : stack.pop();

      if (topElement != mappings[c]) {
        return false;
      }

    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};
