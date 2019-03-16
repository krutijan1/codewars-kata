let displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.isPresent = function(element) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value === element) {
        return true;
      } else if (element < currentNode.value) {
        currentNode = currentNode.left;
      } else if (element > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return false;
  };
}
