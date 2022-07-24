var person = {
    name: "Abhiram",
    age: 28,
    hobbies: ["Sports", "Cooking"],
    details: {
        height: "6 feet",
        weight: "16 lbs"
    }
};
var favouriteActivites;
favouriteActivites = ["Sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
