class SiegeState {
  constructor() {}

  get canMove() {
    return false;
  }

  get damage() {
    return 20;
  }
}

class TankState {
  constructor() {}

  get canMove() {
    return true;
  }

  get damage() {
    return 5;
  }
}

class Tank {
  constructor() {
    this.state = new TankState();
  }

  get canMove() {
    return this.state.canMove;
  }
  get damage() {
    return this.state.damage;
  }
}
