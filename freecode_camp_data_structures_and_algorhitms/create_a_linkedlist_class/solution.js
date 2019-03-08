function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.head = function() {
    return head;
  };

  this.size = function() {
    return length;
  };

  this.add = function(element) {
    let newNode = new Node(element);

    if (length === 0) {
      head = newNode;
      length++;
    } else {
      let current = head;
      while (current.next < null) {
        current++;
      }
      current.next = newNode;
      length++;
    }
  };
}
