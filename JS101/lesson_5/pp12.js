let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = [];
let newArrs = arr.map(nested => {
  return nested.filter(number => number % 3 === 0);
})
arr.forEach(element => {
 newArr.push(element.filter(number => number % 3 === 0));
});
console.log(arr);
console.log(newArrs);
//two ways.