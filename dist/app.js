"use strict";
let user1;
user1 = {
    name: "Abhiram",
    age: 28,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
user1.greet("Hello");
//# sourceMappingURL=app.js.map