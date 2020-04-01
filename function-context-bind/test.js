var btn = document.getElementById('smartBtn');

var mouse = {
    name: 'Mickey',
    sayHi: function() {
        alert(this.name);
    }
}

btn.addEventListener('click', mouse.sayHi.bind(mouse));