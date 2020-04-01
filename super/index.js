class Hero {
    constructor(name, hp, dam) {
        this.name = name;
        this.hp = hp;
        this.dam = dam;
    } 
    applyDam(dam) {
        this.hp -= dam;
    }
    attack(enemy) {
        enemy.applyDam(this.dam);
    }
}

const hero1 = new Hero('1', 100, 10);
const hero2 = new Hero('2', 200, 5);
console.log({hero1, hero2});
hero1.attack(hero2);
console.log({hero1, hero2});

class RangedHero extends Hero {
    constructor(name, hp, dam, range) {
        super(name, hp, dam);
        this.range = range;
    }

    attack(enemy) {
        super.attack(enemy);
        this.hp += this.dam;
    }
}

const hero3 = new RangedHero('3', 100, 10);
const hero4 = new Hero('4', 200, 5);
console.log({hero3, hero4});
hero3.attack(hero4);
console.log({hero3, hero4});