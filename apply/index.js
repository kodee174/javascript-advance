// call: function.call(this, param1, param2, ...)
// apply: function.apply(this, [param1, param2, ...])

const cat = {
    name: 'Tom',
    age: '100'
};

function greeting() {
    console.log(`Hi ${this.name} ${this.age}`);
}

greeting.apply(cat);


function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num, 0); 
}

function average() {
    const x = sum.apply(null, arguments);
    console.log(x/arguments.length);
}

average(1, 2, 3, 6);