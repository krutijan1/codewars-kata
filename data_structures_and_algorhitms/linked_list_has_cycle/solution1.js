/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(h) {
  const set = new Set();

  while (h != null) {
    if (set.has(h)) {
      return true;
    } else {
      set.add(h);
    }
    h = h.next;
  }

  return false;
};
