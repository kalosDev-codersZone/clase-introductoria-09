//construir un videojuego (moba) mediante clases
//modelar los distintos elementos del juego mediante clases
//partir de una clase generica --> entidad
//-> character, Tower, Structures --> clase generica se llama Entity
//--> los elementos del juego tendran propiedades y acciones
//acciones --> moverse, atacar, recibir daño
//propiedades --> nombre, daño de ataque, puntos de salud
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

const firstTower = new Tower("tower", 50, 200);
const firstCharacter = new Character("hero", 20, 400);
firstTower.attack(firstCharacter);
