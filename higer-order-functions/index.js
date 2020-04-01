// higer order function is function has param input is function
// or the fucntion return is a function

function waitAndRun(ms, func) {
    setTimeout(func, ms);
}

function run() {
    console.log('Run');
}

waitAndRun(2000, run);