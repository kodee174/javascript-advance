var mouse =  {
    name: 'Mickey',
    sayHi: function() {
        console.log('Hi, my name is', this.name);
    }
}

var cat  = {
    name: 'Tom'
}

// function context
// mouse is context for sayHi
// mouse.sayHi();
// sayHi is a function
var say = mouse.sayHi.bind(cat);

// global context
say();