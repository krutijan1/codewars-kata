const displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.add = function(element) {
    let currentNode = this.root;

    if (this.root === null) {
      this.root = new Node(element);
    } else {
      while (true) {
        if (currentNode.value === element) {
          return null;
        } else if (element > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = new Node(element);
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else if (element < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = new Node(element);
            break;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }
  };
}
