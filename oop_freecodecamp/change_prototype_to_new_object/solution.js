function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 2,
  eat: function() {},
  describe: function() {}
};
