let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// filter them based on if they're odd
//reduce
//sort reduced


arr.sort((a, b) => {
  let aReduced = a.filter(subArr => subArr % 2 === 1).reduce((accum, element) => accum + element);
  let bReduced = b.filter(subArr => subArr % 2 === 1).reduce((accum, element) => accum + element);
 return aReduced - bReduced;
})

console.log(arr);