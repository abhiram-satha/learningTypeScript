const person: {
  name: string;
  age: number;
  hobbies: string[];
  details: {
    height: string;
    weight: string;
  }
  role: [number, string]
} = {
  name: "Abhiram",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  details: {
    height: "6 feet",
    weight: "16 lbs",
  },
  role: [2, "student"],
};

let favouriteActivites: string[];
favouriteActivites = ["Sports"];
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) ===> this would result in an error because TS knows hobby is a string not an array
}
