function add(n1: number, n2: number): number {
  return n1 + n2;
}


function printResult(num: number): void {
  //void because there is no return statement in this function
  console.log("Result: " + num);
}

function printNum(num: number): undefined {
  //undefined because there is no value actually being returned could also use void
  console.log("Result: " + num);
  return;
}

printResult(add(5, 2));

// let someValue: undefined;
