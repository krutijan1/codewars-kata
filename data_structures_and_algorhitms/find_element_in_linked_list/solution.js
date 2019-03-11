function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
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
    var node = new Node(element);
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
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  this.indexOf = function(element) {
    let currentNode = head;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.element === element) {
        break;
      }
      index += 1;
      currentNode = currentNode.next;
    }

    return currentNode === null ? -1 : index;
  };

  this.elementAt = function(index) {
    let currentNode = head;
    let position = 0;

    while (currentNode !== null && position !== index) {
      currentNode = currentNode.next;
      position += 1;
    }

    return currentNode === null ? undefined : currentNode;
  };
}
