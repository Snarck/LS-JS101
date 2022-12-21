// Write three different ways to remove all of the elements from the following array:
let numbers1 = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];
let numbers3 = [1, 2, 3, 4];

for (let i = 0; i < numbers1.length; i = 0) {
  numbers1.pop();
}
console.log(numbers1);

numbers2.splice(0, numbers2.length);

console.log(numbers2);

numbers3.length = 0;
console.log(numbers3);
