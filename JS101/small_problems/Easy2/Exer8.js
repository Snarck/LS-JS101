function oddities(array) {
  const arr = [];
  for (let inc = 0; inc < array.length; inc += 2) {
    arr.push(array[inc]);
  }
  return arr;
}
function evenies(array) {
  // eslint-disable-next-line no-unused-vars
  return array.filter((element, index) => {
    return index % 2 !== 0;
  });
}

console.log(evenies([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenies([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(evenies(["abc", "def"])); // logs ['abc']
console.log(evenies([123])); // logs [123]
console.log(evenies([])); // logs []

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []