// const prompt = require('prompt-sync')();

const t = prompt("ENTER NAME BELOW BOX");
document.getElementById('o').value = t;
function clr() {
    let d = " ";
    document.getElementById('result').value = d;
}
function fun(x) {
    let y = x;
    document.getElementById('result').value += y;
}


function calc() {
    const s = eval(document.getElementById('result').value);
    document.getElementById('result').value = s;
}
