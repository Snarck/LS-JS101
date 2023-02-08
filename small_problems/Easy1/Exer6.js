const getInput = require('readline-sync');

function getProduct(number) {
  let product = 1;
  for (let inc = 1; inc < number; inc += 1) {
    product *= number;
  }
  return "The product of 1 to number is " + number + " is " + product;
}

function getSum(number) {
  let sum = 0;
  for (let inc = 1; inc < number - 1; inc += 1) {
    sum += number;
  }
  return "The sum of the product of 1 to " + number + " is " + sum;
}

let question = getInput.question("Please enter a number greater than 0\n");
let question2 = getInput.question("Enter 's' to computer the sum or 'p' to compute the product.\n" );
if (question2.toLowerCase() === "p") {
  console.log(getProduct(question));
} else if (question2.toLowerCase() === "s") {
  console.log(getSum(question));
}