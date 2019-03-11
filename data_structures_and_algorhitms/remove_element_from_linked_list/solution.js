function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element) {
    if (element === head.element) {
      head = head.next;
      length--;
      return;
    }

    let currentNode = head;
    let previousNode = head;

    while (currentNode !== null && currentNode.element !== element) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      return -1;
    }

    previousNode.next = currentNode.next;
    length--;
  };
}
