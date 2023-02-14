let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let onlyEvens = arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0)
  })
})


// arr.forEach(obj => {
//   for(let key in obj) {
//     if(obj[key].every(num => num % 2 === 0)) {
//       onlyEvens.push(obj[key])
//     };
//   }
// })

console.log(onlyEvens);