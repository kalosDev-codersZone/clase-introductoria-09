//replanteamos el juego agregando un nuevo elemento (fountain)
//replanteamos entidades en inmortales y mortales
//cumplimos con el principio solid ISP

class Entity {
  constructor(name) {
    this.name = name;
  }
}

class Inmortal extends Entity {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

class Mortal extends Entity {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Character extends Mortal {
  constructor(name, attackDamage, health) {
    super(name, health);
    this.attackDamage = attackDamage;
  }
  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  }
  move() {
    console.log(`${this.name} moved`);
  }
}

class Tower extends Mortal {
  constructor(name, attackDamage, health) {
    super(name, health);
    this.attackDamage = attackDamage;
  }
  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  }
  move() {
    console.log(`${this.name} moved`);
  }
}
class Structure extends Entity {}

class Fountain extends Inmortal {
  constructor(name, attackDamage) {
    super(name, attackDamage);
  }
  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  }
}

const firstTower = new Tower("tower", 50, 200);
const firstCharacter = new Character("hero", 20, 400);
const firstFountain = new Fountain("fuenteDivina", 80);
firstTower.attack(firstCharacter);
firstFountain.attack(firstCharacter);
