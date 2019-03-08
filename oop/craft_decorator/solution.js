class Marine {
  constructor(damage, armor) {
    this._damage = damage;
    this._armor = armor;
  }

  get damage() {
    return this._damage;
  }
  get armor() {
    return this._armor;
  }
}

class MarineWeaponUpgrade {
  constructor(marine) {
    this.marine = marine;
  }

  get damage() {
    return this.marine.damage + 1;
  }
  get armor() {
    return this.marine.armor;
  }
}

class MarineArmorUpgrade {
  constructor(marine) {
    this.marine = marine;
  }

  get damage() {
    return this.marine.damage;
  }
  get armor() {
    return this.marine.armor + 1;
  }
}
