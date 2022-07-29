//  const userName = "Abhiram"


// //Arrow function  => return not needed if expression can be entered on one line
//  const add = (a: number, b: number = 1) => a + b;

// const button = document.querySelector('button')

// if (button) {

//   button.addEventListener('click', event => console.log("click"))
// }

//  console.log(add(8,7))

 const hobbies = ['Sports', 'Cooking'];


 //destructuring arrays
 const [hobby1, hobby2, ...remaininghobbies] = hobbies;

 const activeHobbies = ['hiking', ...hobbies];



 const person = {
   name: "Abhiram",
   age: 30
 }


 const copiedPerson = {...person};

 console.log(copiedPerson.name)


const add = (...numbers: number[]) => {
  return numbers.reduce((currResult, currValue)=> {
    return currResult + currValue
  }, 0)
}

const addNumbers = add(5, 10, 2, 3.7)


