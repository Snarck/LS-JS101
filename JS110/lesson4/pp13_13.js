let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
const arrOddSorter = (a, b) => {
  a = a.filter(num => num % 2 === 1).reduce((accum, total) => accum + total);
  b = b.filter(num => num % 2 === 1).reduce((accum, total) => accum + total);
  return a - b;
}


console.log( 
  arr.sort(arrOddSorter)
)
