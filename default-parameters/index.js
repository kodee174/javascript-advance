// function greeting(name) {
//     if(name == undefined) {
//         name = 'Friend';
//     }
//     return `Hi, ${name}`;
// }

// console.log(greeting());
// console.log(greeting('Test'));


// function greeting(name = 'Friend') {
//     return `Hi, ${name}`;
// }

// console.log(greeting());
// console.log(greeting('Test'));


function greeting(name = 'Friend', language='vi') {
    if(language == 'vi') {
        return `Chao, ${name}`;
    }

    if(language == 'en') {
        return `Hi, ${name}`;
    }
    return 'Konnichiwa';
}

console.log(greeting());
console.log(greeting('Test', 'en'));
console.log(greeting('Test', 'vi'));