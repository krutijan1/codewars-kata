const displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.findMinHeight = function(root = this.root) {
    if (root === null) {
      return -1;
    } else if (root.left === null && root.right === null) {
      return 0;
    } else if (root.left == null) {
      return this.findMinHeight(root.right) + 1;
    } else if (root.right == null) {
      return this.findMinHeight(root.left) + 1;
    } else {
      return (
        Math.min(
          this.findMinHeight(root.left),
          this.findMinHeight(root.right)
        ) + 1
      );
    }
  };
  this.findMaxHeight = function(root = this.root) {
    if (root === null) {
      return -1;
    } else if (root.left === null && root.right === null) {
      return 0;
    } else if (root.left == null) {
      return this.findMaxHeight(root.right) + 1;
    } else if (root.right == null) {
      return this.findMaxHeight(root.left) + 1;
    } else {
      return (
        Math.max(
          this.findMaxHeight(root.left),
          this.findMaxHeight(root.right)
        ) + 1
      );
    }
  };
  this.isBalanced = function(root = this.root) {
    if (root === null || root.left === null || root.right === null) {
      return false;
    }
    let l = this.findMaxHeight(root.left);
    let r = this.findMaxHeight(root.right);
    let difference = Math.abs(r - l);
    if (
      difference <= 1 &&
      this.isBalanced(root.left) &&
      this.isBalanced(root.right)
    ) {
      return false;
    }
    return true;
  };
  // change code above this line
}
