const rl = require('readline-sync');

function maths (num1, num2) {

  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
}

let question1 = Number(rl.question("Enter the first number: "));
let question2 = Number(rl.question ("Enter the second number"));
if (question1 < 1 || question2 < 1) {
  console.log("Invalid");
} else {
  maths(question1, question2);
}
