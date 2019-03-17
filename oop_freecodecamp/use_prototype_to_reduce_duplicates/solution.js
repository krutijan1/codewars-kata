function Dog(name) {
  Dog.prototype.numLegs = 2;
  this.name = name;
}

let beagle = new Dog('Snoopy');
