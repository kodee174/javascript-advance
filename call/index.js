// call: function.call(this, param1, param2, ...)

// function greeting(name, age) {
//     console.log(`Hi ${name} ${age}`);
// }

// greeting.call(null, 'Tom', 10);

const cat = {
    name: 'Tom',
    age: '100'
};

function greeting() {
    console.log(`Hi ${this.name} ${this.age}`);
}

greeting.call(cat);