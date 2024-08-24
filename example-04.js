//construir un videojuego (moba) mediante clases
//modelar los distintos elementos del juego mediante clases
//partir de una clase generica --> entidad
//-> character, Tower, Structures --> clase generica se llama Entity
//--> los elementos del juego tendran propiedades y acciones
//acciones --> moverse, atacar, recibir daño
//propiedades --> nombre, daño de ataque, puntos de salud
class Entity {
  constructor(name, health) {
    this.name = name;
    this.health = health;
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
    super(name, health);
    this.attackDamage = attackDamage;
  }
}

Object.assign(Character.prototype, hasHealth, hasAttack, hasMove);

class Tower extends Entity {
  constructor(name, attackDamage, health) {
    super(name, health);
    this.attackDamage = attackDamage;
  }
}

Object.assign(Tower.prototype, hasAttack, hasHealth);

class Structure extends Entity {
  constructor(name, health) {
    super(name, health);
  }
}

Object.assign(Structure.prototype, hasHealth);

const firstTower = new Tower("tower", 50, 200);
const firstCharacter = new Character("hero", 20, 400);
firstTower.attack(firstCharacter);
