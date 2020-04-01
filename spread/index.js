const a = [1, 2, 3];
const b = [0, ...a, 4, 5];
console.log(b);

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(...b));