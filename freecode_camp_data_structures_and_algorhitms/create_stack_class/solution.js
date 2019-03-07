function Stack() {
  let collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.push = function(element) {
    collection.push(element);
  };
  this.pop = function() {
    return collection.pop();
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
  this.peek = function() {
    return collection[0];
  };
  this.clear = function() {
    collection = [];
  };
}
