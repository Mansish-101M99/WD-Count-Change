
let counterDisplay = document.getElementById("sp");
let inc = document.getElementById("intinc");
let dec = document.getElementById("intdec");
let rst = document.getElementById("reset");

let count = 0, vs;

function increment() {
    count++;
    console.log(count);
    counterDisplay.innerHTML = count;
}

function decrement() {
    count--;
    console.log(count);
    counterDisplay.innerHTML = count;
}

function reset() {
    vs = "Start";
    console.log(vs);
    counterDisplay.innerHTML = vs;
}