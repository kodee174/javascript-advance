// // inheritance

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
    
//     eat() {
//         console.log('Eating...');
//     }
// }

// class Bird extends Animal {
//     fly() {
//         console.log('Flying...');
//     }
// }

// class Parrot extends Bird {
//     speak() {
//         console.log('Speaking...');
//     }
// }

// const bird = new Parrot('Test');
// bird.fly();
// bird.speak();

// contructor function
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log('Eating');
}

function Bird(name) {
    Animal.apply(this, arguments);
}

Bird.prototype = new Animal();

