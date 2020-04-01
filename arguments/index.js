// const names = ['Hoang', 'Trung', 'Anh'];

// for(let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// const obj = {
//     0: 'Hoang',
//     1: 'Trung',
//     2: 'Anh',
//     length: 3
// };

// for(let i = 0; i < obj.length; i++) {
//     console.log(obj[i]);
// }


function sum() {
    const numbers = Array.from(arguments);
    console.log(numbers.reduce(function(sum, num) {
        return sum + num;
    }, 0));
}

sum(1, 2);
sum(1, 2, 3, 4, 5);