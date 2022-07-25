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
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Abhiram",
    age: 28,
    hobbies: ["Sports", "Cooking"],
    details: {
        height: "6 feet",
        weight: "16 lbs"
    },
    role: Role.AUTHOR
};
var favouriteActivites;
favouriteActivites = ["Sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) ===> this would result in an error because TS knows hobby is a string not an array
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
