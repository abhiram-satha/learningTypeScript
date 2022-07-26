"use strict";
const button2 = document.querySelector("button");
const input12 = document.getElementById("num1");
const input22 = document.getElementById("num2");
function addNum(num1, num2) {
    return num1 + num2;
}
button2.addEventListener("click", function () {
    console.log(addNum(+input12.value, +input22.value));
});
