let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] *= 2;
  }
  return numbers;
}

function selectFruit(produce) {
  let selectedFruit = {};
  Object.keys(produce).forEach(key => {
    if(produce[key] === "Fruit") {
      selectedFruit[key] = produce[key];
    }
  })
  return selectedFruit;
}

function doubleOddIndexes(numbers) {
  let doubledNumbers = [];
  for (let idx = 0; idx < numbers.length; idx += 1) {
    if (idx % 2 === 0 ) {
      doubledNumbers.push(numbers[idx]);
    } else {
      doubledNumbers.push(numbers[idx] * 2);
    }
  }
  return doubledNumbers;
}

function multiply(myNumbers, multiplier) {
  return myNumbers.map(element => element * multiplier);
}

// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
// console.log(doubleOddIndexes(myNumbers));
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]