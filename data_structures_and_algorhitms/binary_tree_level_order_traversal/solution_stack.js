/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
    const stack = [];
    const result = [];

    if (!root) {
        return result;
    }

    stack.push(root);

    while (stack.length > 0) {

        const level = [];
        const n = stack.length;

        for (let i = 0; i < n; i++) {
            const el = stack.shift();

            if (!el) {
                continue;
            }
            level.push(el.val);

            if (el.left) {
                stack.push(el.left);
            }
            if (el.right) {
                stack.push(el.right);
            }
        }

        result.push(level);
    }

    return result;
};
