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

  this.addAt = function(index, element) {
    let currentNode = head;
    let previousNode;
    const newE = new Node(element);

    if (index === 0) {
      newE.next = head;
    } else {
      let position = 0;

      while (position !== index) {
        if (currentNode === null) {
          return false;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
        position += 1;
      }

      if (currentNode !== null) {
        const tmp = previousNode.next;
        previousNode.next = newE;
        newE.next = tmp;
      }
    }

    length++;
  };
}
