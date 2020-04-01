// // constructor function

// function Mouse(name) {
//     this.name = name;
// }

// Mouse.prototype.run = function() {
//     console.log(`${this.name} is running`);
// }

// const mickey = new Mouse('Mickey');
// mickey.run();

class Mouse {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running`);
    }
}

const mickey = new Mouse('Mickey');
mickey.run();