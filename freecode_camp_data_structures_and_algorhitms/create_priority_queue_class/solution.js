function PriorityQueue() {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  this.isEmpty = function() {
    return this.collection.length === 0;
  };
  this.front = function() {
    return this.collection[0];
  };
  this.size = function() {
    return this.collection.length;
  };
  this.enqueue = function(item) {
    if (this.collection.length === 0) {
      this.collection.push(item);
    } else if (this.collection.length === 1) {
      if (item[1] >= this.collection[0][1]) {
        this.collection.push(item);
      } else if (item[1] < this.collection[0][1]) {
        this.collection.unshift(item);
      }
    } else if (this.collection.length > 1) {
      let check = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (this.collection[i][1] > item[1]) {
          if (i === 0) {
            check = true;
            this.collection.unshift(item);
            break;
          } else {
            check = true;
            let sliced = this.collection.slice(0, i);
            let slicedEnd = this.collection.slice(i, this.collection.length);
            sliced.push(item);
            this.collection = sliced.concat(slicedEnd);
            break;
          }
        }
      }
      if (!check) {
        this.collection.push(item);
      }
    }
  };
  this.dequeue = function() {
    return this.collection.shift()[0];
  };
}
