const moment = require('moment');

class StopWatch {
  constructor() {
    this.init();
  }

  init() {
    this.time = moment().hour(0).minute(0).second(0);
  }

  start() {
    this.init();
    this.timer = setInterval(() => {
      this.print();
      this.time = this.time.add(1, 'seconds');
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }

  reset() {
    this.stop();
    this.init();
  }

  print() {
    console.log(this.time.format('HH:mm:ss'));
  }
}

const stopWatch = new StopWatch();

stopWatch.start();

setTimeout(() => {
    stopWatch.stop();
    setTimeout(() => {
        stopWatch.print();
        stopWatch.reset();
        stopWatch.print();
    }, 4000);
}, 5000);
