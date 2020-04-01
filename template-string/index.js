function greeting(name) {
    return 'Hi, ' + name + '!';
}

function greeting2(name) {
    return `Hi, 
    ${name}`;
}

var result = greeting2('Test');
console.log(result);