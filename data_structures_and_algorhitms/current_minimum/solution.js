/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this.stack = [];
  this.index = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.index += 1;
  const currMin = this.stack[this.index - 1]
    ? this.stack[this.index - 1].min
    : x;
  this.stack[this.index] = {
    value: x,
    min: Math.min(x, currMin)
  };
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const elem = this.stack[this.index];
  this.stack.splice(-1, 1);
  this.index -= 1;
  return elem;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.index].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[this.index].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.index = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.index += 1;
  const currMin = this.stack[this.index - 1]
    ? this.stack[this.index - 1].min
    : x;
  this.stack[this.index] = {
    value: x,
    min: Math.min(x, currMin)
  };
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const elem = this.stack[this.index];
  this.stack.splice(-1, 1);
  this.index -= 1;
  return elem;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.index].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[this.index].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
