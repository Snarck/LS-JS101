const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  let getRow = matrix[0].length;
  let getElement = matrix.length;
  for (let row = 0; row < getRow; row += 1) {
    for (let ele = row; ele < getElement; ele += 1) {
      let storeVar = matrix[row][ele];
      matrix[row][ele] = matrix[ele][row];
      matrix[ele][row] = storeVar;
    }
  }
}


console.log(matrix);
let newMatrix = transpose(matrix);
console.log(matrix);
// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]