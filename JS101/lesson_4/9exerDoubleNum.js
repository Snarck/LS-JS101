const myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(multiplier) {
  for(let idx = 0; idx < myNumbers.length; idx += 1) {
    myNumbers[idx] = myNumbers[idx] * multiplier;
  }
}

console.log(myNumbers);
doubleNumbers(5);
console.log(myNumbers);