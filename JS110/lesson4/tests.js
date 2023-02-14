const even = (element) => element % 2 === 0;
console.log([1, 2, 3, 4, 5].some(even)) // true
console.log([1, 3, 5].some(even)) //false

const lowerThan40 = (element) => element < 40;
console.log([1, 5, 30, 39].every(lowerThan40)); //true
console.log([1, 5, 30, 39, 41].every(lowerThan40)); // false

const isString = (element) => typeof element === "string";
console.log([1, 2, 3, "steve", 5, 7, "henry"].find(isString));
console.log([1, 2, 3, "steve", 5, 7, "henry"].find(element => isString(element)));

console.log([40, 41, 42, 43, 39, 40, 50].findIndex(lowerThan40)); // 4
console.log([1, 2, 3, 4, 5].findIndex(element => element > 40)); // -1

console.log([1, 2, 3, 4].reverse()) // [4, 3, 2, 1];
let arr = [1, 2, 3, 4];
console.log(arr);
let arr2 = arr.reverse(); // [4, 3, 2, 1]
console.log(arr2, arr); // [4, 3, 2, 1], [4, 3, 2, 1]



function outputNumbers (number) {
  console.log(number);
}
function selectOdd (number) {
  return number % 2 === 1;
}

function multiplyEvenNumbers(number) {
  return number * (number % 2 === 0 ? 2 : 1);
}

console.log([1, 2, 3, 4].map(multiplyEvenNumbers)) // [1, 4, 3, 8]
console.log([1, 2, 3, 4, 5].filter(selectOdd)) // 1, 3, 5
console.log([1, 2, 3, 4].forEach(outputNumbers));

