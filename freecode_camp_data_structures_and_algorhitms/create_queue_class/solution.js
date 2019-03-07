function Queue() {
  let collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
  this.size = function() {
    return collection.length;
  };
  this.enqueue = function(element) {
    collection.push(element);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
}
