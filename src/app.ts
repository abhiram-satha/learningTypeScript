 const userName = "Abhiram"


//Arrow function  => return not needed if expression can be entered on one line
 const add = (a: number, b: number) => a + b;

const button = document.querySelector('button')

if (button) {

  button.addEventListener('click', event => console.log(event))
}

 console.log(add(8,7))


