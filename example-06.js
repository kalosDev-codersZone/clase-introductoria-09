//composicion para agregar un nuevo elemento al juego (fountain)

class Entity {
  //cumplir con ISP se puede realizar mediante la composicion y la herencia
  constructor(name) {
    this.name = name;
  }
}

const hasMove = {
  move() {
    console.log(`${this.name} moved`);
  },
};
const hasAttack = {
  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  },
};
const hasHealth = {
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  },
};

class Character extends Entity {
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }
}

Object.assign(Character.prototype, hasMove, hasAttack, hasHealth);

class Tower extends Entity {
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }
}

Object.assign(Tower.prototype, hasAttack, hasHealth);

class Structure extends Entity {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}

Object.assign(Structure.prototype, hasHealth);

class Fountain extends Entity {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

Object.assign(Fountain.prototype, hasAttack);

const firstTower = new Tower("tower", 50, 200);
const firstCharacter = new Character("hero", 20, 400);
const firstFountain = new Fountain("fuenteDivina", 80);
firstTower.attack(firstCharacter);
firstFountain.attack(firstCharacter);
