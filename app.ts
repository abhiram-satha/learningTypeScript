function add(n1: number, n2: number): number {
  return n1 + n2;
}


function printResult(num: number): void {
  //void because there is no return statement in this function
  console.log("Result: " + num);
}

printResult(add(5, 2));
