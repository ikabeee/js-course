class Animal {
    constructor(race, color, numberLegs, specie) {
        this.race = race;
        this.color = color;
        this.numberLegs = numberLegs;
        this.specie = specie;
    }

    get info() {
        return `Specie: ${this.specie}, Race: ${this.race}, Color: ${this.color}, Number of Legs: ${this.numberLegs}`;
    }
}

class Dog extends Animal {
    constructor(race, color, numberLegs, specie, tail) {
        super(race, color, numberLegs, specie); /* Says what is gonna inherit*/
        this.tail = tail;
    }
    getInfo() {
        return `Specie: ${this.specie}, Race: ${this.race}, Color: ${this.color}, Number of Legs: ${this.numberLegs} tail: My tail is ${this.tail}`;
    }

    bark() {
        console.log('Woof')
    }
}

const pitbull = new Dog("Pitbull", "Brown", 4, "Mammal", "short");
console.log(pitbull.info);
pitbull.bark();
