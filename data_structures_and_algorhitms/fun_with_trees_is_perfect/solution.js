class TreeNode {
  constructor(left = null, right = null) {
    this.left = left;
    this.right = right;
  }

  static findADepth(node) {
    let d = 0;

    while (node !== null) {
      d++;
      node = node.left;
    }

    return d;
  }

  static check(root, depth, level = 0) {
    if (root === null) {
      return true;
    }

    if (root.left === null && root.right === null) {
      return depth === level + 1;
    }

    if (root.left === null || root.right === null) {
      return false;
    }

    return (
      TreeNode.check(root.left, depth, level + 1) &&
      TreeNode.check(root.right, depth, level + 1)
    );
  }

  static isPerfect(root) {
    const depth = TreeNode.findADepth(root);
    return TreeNode.check(root, depth);
  }

  static leaf() {
    return new TreeNode();
  }

  static join(left, right) {
    return new TreeNode().withChildren(left, right);
  }

  withLeft(left) {
    this.left = left;
    return this;
  }

  withRight(right) {
    this.right = right;
    return this;
  }

  withChildren(left, right) {
    this.left = left;
    this.right = right;
    return this;
  }

  withLeftLeaf() {
    return this.withLeft(TreeNode.leaf());
  }

  withRightLeaf() {
    return this.withRight(TreeNode.leaf());
  }

  withLeaves() {
    return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
  }
}
