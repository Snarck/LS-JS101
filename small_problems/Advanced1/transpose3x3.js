const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];
const matrix2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 0],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24]
]

function transpose(array) {
  let getRow = array[0].length;
  let getElement = array.length; 
  let transposed = [];
  for(let row = 0; row < getRow; row += 1) {
    let newArr = [];
    for(let ele = 0; ele < getElement; ele += 1) {
      newArr.push(array[ele][row]);
    }
    transposed.push(newArr);
  }
  return transposed;

}




let newMatrix = transpose(matrix);
let newMatrix2 = transpose(matrix2);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
console.log(newMatrix2);
console.log(matrix2);
