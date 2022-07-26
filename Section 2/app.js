"use strict";
let userInput;
let userName;
userInput = 5;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    //this code never executes because of the error so we can use never as the function return
    throw { message, errorCode: code };
}
generateError('An error occurred', 500);
