const button2 = document.querySelector("button");
const input12 = document.getElementById("num1")! as HTMLInputElement;
const input22 = document.getElementById("num2")! as HTMLInputElement;

function addNum(num1: number, num2: number) {
  return num1 + num2;
}

button2.addEventListener("click", function() {
  console.log(addNum(+input12.value, +input22.value));
});
