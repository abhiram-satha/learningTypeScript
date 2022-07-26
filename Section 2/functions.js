"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    //void because there is no return statement in this function
    console.log("Result: " + num);
}
function printNum(num) {
    //undefined because there is no value actually being returned could also use void
    console.log("Result: " + num);
    return;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 2));
let combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
