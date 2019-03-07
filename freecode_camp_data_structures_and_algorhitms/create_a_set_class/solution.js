function Set() {
  const collection = [];
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };
  
  this.values = function() {
    return collection;
  };

  this.add = function(item) {
    if (collection.indexOf(item) === -1) {
      collection.push(item);
      return true;
    }
    return false;
  };
}
