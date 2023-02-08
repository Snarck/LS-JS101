


let numbers = [1, 2, 3, 4, 5];
let num = numbers.slice().reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]


numbers = [1, 2, 3, 4, 5];
let num2 = numbers.slice().sort((num1, num2) => num2 - num1);

console.log(numbers); // [ 5, 4, 3, 2, 1 ]
let num3 = [];

numbers.forEach(element => {
  num3.unshift(element)
})
console.log(num);
console.log(num2);
console.log(num3);