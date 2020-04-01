// function sum(a, b) {
//     return a + b;
// }

// sum(1, 2);

// var sum2 = function(a, b) {
//     return a + b;
// }

// sum2(3, 2);

var sum  = (a, b) => {
    return a + b;
}

console.log(sum(4, 8));


var sum = (a, b) => a + b;

console.log(sum(1, 2));

// var square = (x) => x * x;
var square = x => x * x;
square(5);

var doSomeThing = () => Date.now();

console.log(doSomeThing());

var arr = [1, 2, 3];
// arr_sq = arr.map(function(x) {
//     return x * x;
// })

var arr_sq = arr.map(x => x * x);

console.log(arr_sq);