class Probe {
  constructor() {
    this.commands = [];
    this.position = { x: 0, y: 0 };
    this.minerals = 0;
  }
  move(x, y) {
    this.commands.push(new MoveCommand(this, x, y));
  }
  gather() {
    this.commands.push(new GatherCommand(this));
  }
}

class MoveCommand {
  constructor(unit, x, y) {
    this.unit = unit;
    this.x = x;
    this.y = y;
  }
  execute() {
    this.unit.position = { x: this.x, y: this.y };
  }
  canExecute() {}
}

class GatherCommand {
  constructor(unit) {
    this.unit = unit;
  }
  execute() {
    if (this.canExecute()) {
      this.unit.minerals += 5;
    }
  }
  canExecute() {
    return this.unit.minerals === 0;
  }
}
