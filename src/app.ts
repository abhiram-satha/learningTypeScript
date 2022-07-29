 const userName = "Abhiram"


//Arrow function  => return not needed if expression can be entered on one line
 const add = (a: number, b: number = 1) => a + b;

const button = document.querySelector('button')

if (button) {

  button.addEventListener('click', event => console.log("click"))
}

 console.log(add(8,7))


