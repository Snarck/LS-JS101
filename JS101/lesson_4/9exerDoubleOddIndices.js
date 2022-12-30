let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleOddIndices() {
let doubledNums = [];
for (let idx = 0; idx < myNumbers.length; idx += 1) {
  if(idx % 2 === 1) {
    doubledNums.push(myNumbers[idx] * 2)
  } else {
    doubledNums.push(myNumbers[idx]);
  }
}

return doubledNums;
}

console.log(doubleOddIndices());

