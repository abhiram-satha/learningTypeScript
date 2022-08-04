"use strict";
class Person {
    constructor(n, age) {
        this.name = n;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1;
user1 = new Person('Abhiram', 28);
user1.greet("Hello");
console.log(user1);
//# sourceMappingURL=app.js.map