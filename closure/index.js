// closure

function sum(a, b) {
    const c = a + b;
    console.log(c);
    return c;
}


sum(1, 2);

function sum2(a, b) {
    const c = a + b;
    return function() {
        console.log(c);
    }
}


sum2(1, 2)();


function debug(name) {
    return function log(str) {
        console.log(`${name}: ${str}`);
    }
}

const log = debug('Mouse');
log('Error happened');