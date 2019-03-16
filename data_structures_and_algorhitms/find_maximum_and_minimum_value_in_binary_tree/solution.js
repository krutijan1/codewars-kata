let displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.findMin = function() {
    if (this.root === null) {
      return null;
    }
    let currentNode = this.root;
    let min = Number.MAX_VALUE;

    while (currentNode !== null) {
      if (currentNode.value < min) {
        min = currentNode.value;
      }
      currentNode = currentNode.left;
    }

    return min;
  };

  this.findMax = function() {
    if (this.root === null) {
      return null;
    }
    let currentNode = this.root;
    let max = Number.MIN_VALUE;

    while (currentNode !== null) {
      if (currentNode.value > max) {
        max = currentNode.value;
      }
      currentNode = currentNode.right;
    }

    return max;
  };
}
