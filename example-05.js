//agregar un nuevo elemento al juego
//habiamos planteado en el juego la existencia de ciertas entidades estaticas que realizan daño y que pueden ser destruidas(tower)
//agregamos un nuevo elemento al juego (fuente) que va poder realizar daño y no puede ser destruido

class Entity {
  //cumplir con ISP se puede realizar mediante la composicion y la herencia
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }
  move() {
    console.log(`${this.name} moved`);
  }
  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  }
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Character extends Entity {}
class Tower extends Entity {
  move() {
    return;
  }
}
class Structure extends Entity {
  constructor(name, health) {
    super(name, health);
  }
  move() {
    return;
  }
  attack() {
    return;
  }
}
class Fountain extends Entity {
  constructor(name, attackDamage) {
    super(name, attackDamage);
  }
  move() {
    return;
  }
  takeDamage() {
    return;
  }
}

const firstTower = new Tower("tower", 50, 200);
const firstCharacter = new Character("hero", 20, 400);
const firstFountain = new Fountain("fuenteDivina", 80);
firstTower.attack(firstCharacter);
firstFountain.attack(firstCharacter);
