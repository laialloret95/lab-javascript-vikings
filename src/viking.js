// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`;
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
        else return `A Saxon has died in combat`;
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        console.log(randomSaxon);
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        console.log(randomViking);
        
        let result = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) { this.saxonArmy.splice(randomSaxon,1) }
        return result;
    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        console.log(randomSaxon);
        
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        console.log(randomViking);

        let result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) { this.vikingArmy.splice(this.randomViking,1) }
        return result;
    }
}

let ragnar = new Viking('Ragnar',20,2);
let lagertha = new Viking('Lagertha',20,2);

let ecbert = new Saxon(4,2);
let floki = new Saxon(4,2);

let newWar = new War();

newWar.addViking(ragnar);
newWar.addViking(lagertha);

newWar.addSaxon(ecbert);
newWar.addSaxon(floki);

newWar.saxonAttack();
newWar.vikingAttack();
newWar.vikingAttack();
newWar.vikingAttack();
console.log(newWar.vikingArmy, newWar.saxonArmy);