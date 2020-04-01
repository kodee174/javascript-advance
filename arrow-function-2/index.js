// var a = {
//     name: 'Mickey',
//     run: function() {
//         var run2 = function() {
//             console.log(this.name);
//         }.bind(this); // or bind(a)
//         run2();
//     }
// }

var a = {
    name: 'Mickey',
    run: function() {
        var run2 = () => {
            console.log(this.name);
        }
        run2();
    }
}

a.run();

// var b = {
//     name: 'Test',
//     run: function() {
//         setTimeout(function() {
//             console.log(this.name);
//         }, 2000);
//     }
// }


var b = {
    name: 'Test',
    run: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
    }
}

b.run();

// var x = b.run.bind(b);

// x();