let userInput: unknown;
let userName: string;

userInput = 5;

if (typeof userInput === "string") {
  userName = userInput;

}


function generateError(message: string, code: number): never {
  //this code never executes because of the error so we can use never as the function return
  throw {message, errorCode: code}
}


generateError('An error occurred', 500);