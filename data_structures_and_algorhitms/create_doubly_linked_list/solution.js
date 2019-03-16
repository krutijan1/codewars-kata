var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;

  this.add = function(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;

    newNode.prev = this.tail;

    this.tail = newNode;

    return this;
  };

  this.remove = function(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          this.head = deletedNode.next;

          if (this.head) {
            this.head.prev = null;
          }
          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.prev;
          this.tail.next = null;
        } else {
          const previousNode = deletedNode.prev;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }

      currentNode = currentNode.next;
    }

    return deletedNode;
  };
};
