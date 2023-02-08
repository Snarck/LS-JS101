const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

function transpose(matrix) {
  let newMatrix = [];
  let columnsNeeded = matrix[0].length;
  let elementsNeeded = matrix.length;
  for(let columns = 0; columns < columnsNeeded; columns += 1) {
    newMatrix.push([]);
  }

  for(let colm = 0; colm < columnsNeeded; colm += 1) {
    for(let ele = 0; ele < elementsNeeded; ele += 1) {
      newMatrix[colm][ele] = matrix[ele][colm];
    }
  }
  console.log(newMatrix);
  return newMatrix;
}




let newMatrix = transpose(matrix);

//console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
//console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]