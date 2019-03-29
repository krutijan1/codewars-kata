function makeClass() {
  'use strict';
  /* Alter code below this line */
  const Thermostat = class Thermostat {
    constructor(temperature) {
      this._temperature = temperature;
    }
    get temperature() {
      return this._temperature;
    }
    set temperature(temperature) {
      this._temperature = temperature;
    }
  };
  /* Alter code above this line */
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale

let temp = thermos.temperature; // 24.44 in C

thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
