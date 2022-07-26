"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   details: {
//     height: string;
//     weight: string;
//   }
//   role: [number, string]
// } = {
//   name: "Abhiram",
//   age: 28,
//   hobbies: ["Sports", "Cooking"],
//   details: {
//     height: "6 feet",
//     weight: "16 lbs",
//   },
//   role: [2, "student"],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "Abhiram",
    age: 28,
    hobbies: ["Sports", "Cooking"],
    details: {
        height: "6 feet",
        weight: "16 lbs",
    },
    role: Role.AUTHOR,
};
let favouriteActivites;
favouriteActivites = ["Sports"];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) ===> this would result in an error because TS knows hobby is a string not an array
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
