const getInput = require('readline-sync');

let bill = parseFloat(getInput.question("What is the bill?\n"));

let tip = parseFloat(getInput.question("What is the tip?\n"));

let tipAmount = (tip / 100) * bill;
let totalAmount = tipAmount + bill;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalAmount}`);