const Singleton = function() {
  if (Singleton._instance) {
    return Singleton._instance;
  }
  Singleton._instance = this;
};
