'use strict';

class Animal {
  static alive = [];
  health;

  get Health() {
    return this.health;
  }

  set Health(value) {
    this.health = value;

    if (this.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(this), 1);
    }
  }

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name, health = 100) {
    super(name, health);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(hervivore) {
    if (hervivore instanceof Herbivore && hervivore.hidden === false) {
      hervivore.Health = hervivore.Health - 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

// const harb = new Herbivore();
