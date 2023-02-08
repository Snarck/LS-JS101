Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

Input : a MxN matrix

Output: a new matrix rotated 90 degrees.

Example of previous code: 
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
to transpose a MxN array.


[1, 3, 4]
[5, 6, 7]

rotated:
[5, 1]
[6, 3]
[7, 4]

Populate an array with the appropriate arrays to make up our new array. 
 - example above: [1, 3, 4] is 2 arrays, it would become 3. 

 Rotate the arrays?

 Let's check out the datastructures:

 1, 2, 3,
 4, 5, 6
 :
 4, 1
 5, 2
 6, 3

 1, 2, 3, 4,
 5, 6, 7, 8
:
 5, 1, 
 6, 2,
 7, 3,
 8, 4. 

1, 2, 3,
4, 5, 6,
7, 8, 9
:
7, 4, 1,
8, 6, 2
9, 6, 3

If 
   c0 c1 c2 c3
e..[1, 2, 3, 4]
e..[5, 6, 7, 8]
We just need to work from highest E to lowest E. 

newArray gets new columns based on how many columns we need, the length of the elements in the first matrix. (4)

The amount of elements is the length of the matrix - 2.
So we know we need 4 columns and 2 elements.

c0 - e1 = 5
c0 - e0 = 1
[5, 1]

c1 - e1 = 6
c1 - e0 = 2.. etc.