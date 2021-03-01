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
    attack(attackersArmy,victimsArmy) {
        if(attackersArmy.length === 0 || victimsArmy.length === 0) return "The war is already over";

        let randomAttackerIndex = Math.floor(Math.random() * attackersArmy.length);
        let randomAttacker = attackersArmy[randomAttackerIndex];

        let randomVictimIndex = Math.floor(Math.random() * victimsArmy.length);
        let randomVictim = victimsArmy[randomVictimIndex];

        let result = randomVictim.receiveDamage(randomAttacker.strength);
        if (randomVictim.health <= 0) { victimsArmy.splice(randomVictimIndex,1) }
        return result;
    }
    vikingAttack() {
        return this.attack(this.vikingArmy,this.saxonArmy);   
    }
    saxonAttack() {
        return this.attack(this.saxonArmy,this.vikingArmy);
    }
    showStatus() {
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
        else if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
        else return "Vikings and Saxons are still in the thick of battle.";
    }
}

// let ragnar = new Viking('Ragnar',20,2);
// let lagertha = new Viking('Lagertha',20,2);

// let ecbert = new Saxon(4,2);
// let floki = new Saxon(4,2);

// let newWar = new War();

// newWar.addViking(ragnar);
// newWar.addViking(lagertha);

// newWar.addSaxon(ecbert);
// newWar.addSaxon(floki);

// newWar.saxonAttack();
// console.log(newWar.saxonAttack())
// newWar.vikingAttack();
// console.log(newWar.vikingAttack())
// newWar.vikingAttack();
// console.log(newWar.vikingAttack())
// newWar.vikingAttack();
// console.log(newWar.vikingAttack())
// newWar.showStatus();
// console.log(newWar.showStatus())