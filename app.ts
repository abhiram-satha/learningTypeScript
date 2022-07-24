const person = {
  name: "Abhiram",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  details: {
    height: "6 feet",
    weight: "16 lbs",
  },
};

let favouriteActivites: string[];
favouriteActivites = ["Sports"];
console.log(person);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()) ===> this would result in an error because TS knows hobby is a string not an array
}