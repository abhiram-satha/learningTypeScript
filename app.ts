enum Role2 {'asnumber', 'astext'};

function combine(
  input1: number | string,
  input2: number | string,
  resultType: Role2.asnumber |  Role2.astext
) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number" || resultType === 0) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultType === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedAges = combine(30, 26, 0);

console.log(combinedAges);

const combinedStringAges = combine("30", "26", 0);
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", 1);

console.log(combinedNames);
