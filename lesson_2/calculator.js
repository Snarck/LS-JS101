/*
Ask the user for the first number, second number and operation.
Perform the operation on the two numbers.
print the results to the terminal.
*/

const rl = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}


prompt("Welcome to the calculator!");

prompt("What is your first number?\n");
let number1 = rl.question();

while (invalidNumber(number1)) {
  prompt("Invalid number");
  number1 = rl.question();
}

prompt("What is your second number?\n");
let number2 = rl.question();

while (invalidNumber(number2)) {
  prompt("Invalid number");
  number2 = rl.question();
}

prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n");
let operation = rl.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Must be a valid operation\n1) Add 2) Subtract 3) Multiply 4) Divide\n");
  operation = rl.question();
}

let output;
switch (operation) {
  case "1":
    output = Number(number1) + Number(number2);
    break;
  case "2":
    output = Number(number1) - Number(number2);
    break;
  case "3":
    output = Number(number1) * Number(number2);
    break;
  case "4":
    output = Number(number1) / Number(number2);
    break;
  default:
    console.log("Not valid, sorry!");
}

if (output) {
  prompt(`The result is: ${output}`);
}
