// Static method

class Foo {
    static staticMethod() {
        console.log('Static method');
    }

    anotherMethod() {
        console.log('Another method');
    }
}

Foo.staticMethod();

// Foo.anotherMethod(); // error

const foo = new Foo();
foo.staticMethod(); // error
foo.anotherMethod();


// function Foo() {

// }

// Foo.staticMethod = function() {

// }

// Foo.prototype.anotherMethod = function() {

// }