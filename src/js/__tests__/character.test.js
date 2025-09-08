import { Character } from "../character.js";
import { Bowerman } from "../character.js";

test ('characterlength', () => {
    expect(() => {
        const _character = new Character('charactercharacter', 'Bowerman', 100, 1, 25, 25);
    }).toThrow('Параметры героя не корректны');
})

test ('characterlength2', () => {
    expect(() => {
        const _character = new Character('c', 'Bowerman', 25, 25);
    }).toThrow('Параметры героя не корректны');
})

test ('charactertype', () => {
    expect(() => {
        const _character = new Character('character', 'Bower', 100, 1, 25, 25);
    }).toThrow('Параметры героя не корректны');
})

test ('characterBow', () => {
    expect(() => {
        const _bow = new Bowerman('B');
    }).toThrow('Параметры героя не корректны');
})

test ('level', () => {
    const bow1 = new Bowerman('Bower1');
    bow1.levelUp();
    expect(bow1.level).toBe(2);
})

test ('attack', () => {
    const bow2 = new Bowerman('Bower2');
    bow2.levelUp();
    expect(bow2.attack).toBe(30);
})

test ('defence', () => {
    const bow3 = new Bowerman('Bower3');
    bow3.levelUp();
    expect(bow3.defence).toBe(30);
})

test ('health', () => {
    const character1 = new Character('character1', 'Bowerman', 80, 1, 25, 25);
    character1.levelUp();
    expect(character1.health).toBe(100);
})

test ('health0', () => {
    expect(() => {
        const deadbow = new Character('character2', 'Bowerman', 0, 1, 25, 25);
        deadbow.levelUp();
    }).toThrow('Нельзя повысить левел умершего');
})

test ('damage', () => {
    const bow4 = new Bowerman('Bower4');
    bow4.damage(20);
    expect(bow4.health).toBe(85);
})

test ('damage0', () => {
    const bow5 = new Bowerman('Bower5');
    bow5.damage(2000);
    expect(bow5.health).toBe(0);
})