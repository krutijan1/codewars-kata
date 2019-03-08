var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};
var HashTable = function() {
  this.collection = {};

  // change code below this line

  this.add = function(key, value) {
    let inikey = key;
    let hashed = hash(key);
    let nmp = Object.create(null, {});
    nmp[inikey] = value;

    if (this.collection.hasOwnProperty(hashed)) {
      this.collection[hashed][inikey] = value;
      return;
    } else {
      this.collection[hashed] = {};
      this.collection[hashed][inikey] = value;
    }
  };

  this.remove = function(key) {
    let inikey = key;
    let hashed = hash(key);
    if (hashed in this.collection) {
      delete this.collection[hashed][inikey];
      if (Object.keys(this.collection[hashed]).length < 1) {
        delete this.collection[hashed];
      }
    } else {
      return;
    }
  };

  this.lookup = function(key) {
    let inikey = key;
    let hashed = hash(key);
    if (this.collection.hasOwnProperty(hashed)) {
      if (this.collection[hashed].hasOwnProperty(inikey)) {
        return this.collection[hashed][inikey];
      }
    } else {
      return null;
    }

    // change code above this line
  };
};
