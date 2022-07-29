"use strict";
const userName = "Abhiram";
//Arrow function  => return not needed if expression can be entered on one line
const add = (a, b = 1) => a + b;
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log("click"));
}
console.log(add(8, 7));
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['hiking', ...hobbies];
const person = {
    name: "Abhiram",
    age: 30
};
const copiedPerson = Object.assign({}, person);
const people = person;
people.name = "Max";
console.log(person.name);
console.log(copiedPerson.name);
//# sourceMappingURL=app.js.map