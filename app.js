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
printResult(add(5, 2));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
// let someValue: undefined;
