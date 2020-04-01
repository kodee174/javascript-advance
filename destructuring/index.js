// destructuring


// const arr = [10, 20, 30, 40, 50];

// // const [a, b, c, d, e] = arr;

// // const [a, , c, d, e] = arr;

// const [a, b, c, d, e, f, g, h = 100, i] = arr;


// console.log(a, b, c, d, e, f, g, h, i);


const obj = {
    a: 1,
    b: 2,
    c: 3
};

// const {a: x, b: y, c: z} = obj;
// console.log(x, y, z);

// const {a: a, b: b, c: c} = obj;
const {a, b, c} = obj;
console.log(a, b, c);