var Role2;
(function (Role2) {
    Role2[Role2["asnumber"] = 0] = "asnumber";
    Role2[Role2["astext"] = 1] = "astext";
})(Role2 || (Role2 = {}));
;
function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultType === 0) {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultType === "as-number") {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
    return result;
}
var combinedAges = combine(30, 26, 0);
console.log(combinedAges);
var combinedStringAges = combine("30", "26", 0);
console.log(combinedStringAges);
var combinedNames = combine("Max", "Anna", 1);
console.log(combinedNames);
