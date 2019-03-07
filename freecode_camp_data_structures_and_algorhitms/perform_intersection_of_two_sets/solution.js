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
    if (this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function() {
    return collection.length;
  };

  this.union = function(otherSet) {
    var unionSet = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  this.intersection = function(otherSet) {
    let interSectionSet = new Set();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(function(e) {
      if (secondSet.indexOf() !== -1) {
        interSectionSet.add(e);
      }
    });

    return interSectionSet;
  };
}
