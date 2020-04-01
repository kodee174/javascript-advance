var a = 1;
let b = 2;

// must assign value when delare
const c = 3;
console.log(a, b, c);

// can delare again
var a = 2;

// cant delare again
// let b = 1;

// let/const has block scope

if (true) {
    var x = 10;
}

// l is 10
console.log(x);

if (true) {
    let l  = 10;
    // const l = 10;
}
// l is not defined
console.log(l);

// i 0..5
for(var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// i 0..4
for(let i = 0; i < 5; i++) {
    console.log(i);
}
// error
console.log(i);

