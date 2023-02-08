const multiply = (num1, num2) => num1 * num2;
const square = (num) => multiply(num, num);
const cubed = (num) => multiply(num, num * num);

console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(5, 4) === 15); // logs false
console.log(multiply(5, 10));
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(square(5));
console.log(cubed(5));