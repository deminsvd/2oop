const characterTypes = [
    'Bowerman', 
    'Swordsman', 
    'Magician', 
    'Daemon', 
    'Undead', 
    'Zombie'
]


export class Character {
    constructor(name, type, health, level, attack, defence) {
        if (name.length < 2 || name.length > 10 || !(characterTypes.includes(type))) {
            throw new Error('Параметры героя не корректны');
        }
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего');
        }
        this.level = this.level + 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health <= points * (1 - this.defence / 100)) {
            this.health = 0;
        }
        else 
            this.health -= points * (1 - this.defence / 100);
    }
}


export class Bowerman extends Character{
    constructor(name) {
        super(name, 'Bowerman', 100, 1, 25, 25);
    }
}

class Swordsman extends Character{
    constructor(name) {
        super(name, 'Swordsman', 100, 1, 40, 10);
    }
}

class Magician extends Character{
    constructor(name) {
        super(name, 'Magician', 100, 1, 10, 40);
    }
}

class Daemon extends Character{
    constructor(name) {
        super(name, 'Daemon', 100, 1, 10, 40);
    }
}

class Undead extends Character{
    constructor(name) {
        super(name, 'Undead', 100, 1, 25, 25);
    }
}

class Zombie extends Character{
    constructor(name) {
        super(name, 'Zombie', 100, 1, 40, 10);
    }
}


const _bowerman = new Bowerman ('bowerman');
const _swordsman = new Swordsman ('swordsman');
const _magician = new Magician ('magician');
const _daemon = new Daemon ('daemon');
const _undead = new Undead ('undead');
const _zombie = new Zombie ('zombie');





