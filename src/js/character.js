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
        if (name.length < 2 || name.length >10 || !(characterTypes.includes(type))) {
            throw new Error('Параметры героя не корректны');
        }
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}


export class Bowerman extends Character{
    constructor(name) {
        super(name, 'Bowerman', 100, 1, 25, 25);
    }
}

export class Swordsman extends Character{
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


const bowerman = new Bowerman ('bowerman');
const swordsman = new Swordsman ('swordsman');
const magician = new Magician ('magician');
const daemon = new Daemon ('daemon');
const undead = new Undead ('undead');
const zombie = new Zombie ('zombie');





