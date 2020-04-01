// function log(a, ...number) {
//     console.log(a);
//     console.log(number);
// }

// log(1, 2, 3, 4, 'test');


function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4 ,5 , 6));


function concat(sep, ...strings) {
    return strings.join(sep);
}

console.log(concat('.', 'a', 'b', 'c'));