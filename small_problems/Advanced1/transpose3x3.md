input: a 2 dimensional array (matrix)
output a transposed 2 dimensional array (matrix)

the transpose of a 3x3 matrix is the rsult from exchanging the rows and columns of the original matrix, for example, the transposition of the matrix shown above is: 

1  4  3
5  7  9
8  2  6

original:

1  2  3
4  5  6
7  8  9

Write a function that takes an array of arrays that represents a 3x3 matrix and turns the transpose of the matrix.
You should implement the function on your own without using external libraries.

Take care not to modify the original matrix.

Extrapolating the question, transposition of the original array should look like this:
1  4  3
5  7  9
8  2  6

Which matches up with the testcase above. 

Questions:
What does transposing a matrix mean?
 - according to Mathinsight.org
  Transposing is simply a flipped version of the original matrix. 
  We can transpose a matrix by switching it's rows with it's columns.

Summation:
a transposed matrix is a matrix with a switched row. 
  - [1 2 3] becomes [1 4] or [1 4 3] [2 5 6]
  - [4 5 6] becomes [2 5]
  -                 [3 6]

We have to keep the same data structure [1, 2, 3] but with the transposed array:
  - [1, 2, 3] will become [1, 5, 8]
Let's try to make this procedural and can tranpose anysize array.

Data:
Calculating the size of a matrix:
Matrix is number of arrays * number of elements.
e.g. we're working with a 3 x 3 in testcases.  But if we had 4 arrays, it would become 4x3.  
Knowing this, we know how many elements hav to be in each array (3)
and how many arrays there has to be (3)

0[1, 5, 8] = [1, 4, 3]
1[4, 7, 2] = [5, 7, 9]
2[3, 9, 6] = [8, 2, 6]
RE0  1  2


algorithm: 

Top row becomes the first element of each array. 
The middle row becomes the second element of each array.
The third row becomes the final element of each array.
r1 = r0 e0, r1 e0, r2 e0
r2 = r0 e1, r1 e1, r2 e1
r3 = r0 e2, r1 e2, r2 e2
Seeing the structure above, we can ascertain that:
row.length gets us "r" with 0 being the starting point. 

If we do a nested loop:
loop through rows and take the first element: push to a row
loop through second row and take every second element. push to a row
loop through third row and take every third element.  push to a row:

Loop through "element" to get the first element in each row.
Now loop through row for each row, adding that first element to an array.
Push that array and reset it.
Loop through element again, now +1, 
add each element,
push the array, reset it.







////////////////// transpose in place
     r0 r1  r2
e0.. [1  2  3]
e1.. [4  5  6] 
e2.. [7  8  9]

row = matrix[0].length
element = matrix.length

for(rows)
  for(elements)
  storeVar = row[element] (1)
  swap [row][element] with [element][row] (2)
  swap [element][row] with [row][element]

Visualizing the r0 loop:

r0[e...]
r0e0 = 1
r0e1 = 4
r0e2 = 7

