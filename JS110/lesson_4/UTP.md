## Sum Even Number Rows ##

Imagine a sequence of consecutive even intergers beginning with 2. The intergers are grouped in rows,
with the first row containing one integer, the second row two integers, the third row three integers,
and so on.  Given an integer representing the number of a particular row, return an integer representing
the sum of all the integers in that row.
 
  Explicit
   - sequence of even integers,
   - sequence begins with two
   - integers are consecutive 
   - Sequence is grouped into rows
   - Each row increments larger by one. (1, 2, 3 ...)
   - Row number rquals the number of elements in that row.
    - Row 1 has 1 element, Row 2 has 2 elements ...
  - Input: a single integer. 
   - The integer indentifies a 'row", which is a subset of a sequence of integers 
  - Output: a single integer
   - the sum of the row that's defined by the input integer.




 ## potential sequence ##
1: 2,
2: 4, 6,
3: 8, 10, 12, 14
4: 14, 16, 18, 20
5: ....

 2, 4, 6, 8, 10, 12, 14, ...

- How do we create this stucture? 

## Examples/TC ##

row number: 1 --> sum of integers in row: 2
row number: 2 --> sum of integers in row: 10
row number: 3 --> sum of integers in row: 68

row 1: 2 --> 2.
row 2: 4, 6 --> 10
row 4: 14, 16, 18, 20 --> 68

## DATA STRUCTURE ##

 - Overall structure represnts a sequence as a whole
 - Individual rows within overall structure
 - Indiivdual rows are in a set order in context of a sequence
 - individual rows contain integers
 - integers are in a set order in the context of the sequence.

# a nested array makes the most sense

[
  [2],
  [4, 6]
  [8, 10, 12]
  [14, 16, 18, 20]
  ...
]


## Algorithm ##

1. Create an empty "rows' array to contain all the rows. 
2. Create a 'row' array containing the numbers for each row and add it to the 'rows' array.
  a. substeps can undeline how this is done.
  b. like this...
  c. and this... or create a new problem below. 
3. Repeat step 2 until all the neccessary rows have been created. 
 a. All rows have been created when the length of the 'rows' array is equal to the input. 
4. sum the final row 
5. Return the sum of the final row. 


*Problem: line 2: Create a 'row":
Rules:
-Row is an array
- Arrays contain integers
- Integers are consecutive even numbers
- Integers in each row form a part off an overall larger sequence 
- rows are of different lengths
- input: the information neede to create the output
    a. The start integer
    b. The length of the row
- output: the row itself '[8, 10, 12]'

Examples: 
start: 2, length: 1 --> [2]
start: 4, length: 2 --> [4, 6];
start: 8, length: 3 --> [8, 10, 12]

Data structures:
- an array of integers

Algorithm: 
1. Create an empty row to contain the nested arrays of integers
2. add the starting integer
3. increment the starting integer by 2 to get the next increment in sequence. 
4. Repeat steps 2 and 3 until the array has reached the correct length
5. Return array. 
 

