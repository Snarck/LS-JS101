let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// map the array for the subobjs. 
// check each objects array (obj key) obj[key].equals even
// if it equals even return it
// if it doesn't equal even don't return it.

// let newArr = arr.map(obj => {
//   for(let array in obj) {
//     if(obj[array].every(num => num % 2 === 0)) {
//       return obj;
//     }
//   }

// })

let arr2 = arr.filter(subObj => {
  return Object.values(subObj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  })
})



console.log(arr2);