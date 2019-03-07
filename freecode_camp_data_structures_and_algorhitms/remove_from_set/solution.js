function Set() {
  const collection = [];

  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };
  
  this.values = function() {
    return collection;
  };

  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function(element) {
    const index = collection.indexOf(element);

    if (index !== -1) {
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

}
