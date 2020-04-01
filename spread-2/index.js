// clone/ shalow clone

const obj1 = {
    a: 1,
    b: 2,
    c: 3
}

let obj2 = {
    ...obj1
}

// let obj2 = {}
// for(let key in obj1) {
//     obj2[key] = obj1[key];
// }

console.log({obj1, obj2});
obj2.a = 11;
console.log({obj1, obj2});

let obj3 = {
    a: 1,
    b: 2,
    c: 3,
    d: {e: 4}
}

let obj4 = {
    ...obj3
}

// let obj4 = {}
// for(let key in obj3) {
//     obj4[key] = obj3[key];
// }

console.log({obj3, obj4});
obj4.d.e = 11;
console.log({obj3, obj4});




// deep clone
