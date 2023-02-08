Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

Input: an odd integer
Output: a n X n grid diamond.

diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

  - Input is an odd number.
  - The input determines the size of the center of the diamond
   -5 would be 
      *
     ***
    *****
     ***
      *
  - diamond increments by 2 additional stars.
  - every element must be an equal length.



Datastructure. 

 Instantiate an array called "DIAMOND", 
 Every element in this array has to be the size of the input.
 The center has to be asterisks incrementing by 2. 
 5 = 
_ _ * _ _
_ * * * _
* * * * *

We can use repeat to accomplish this. 
spacesToClear = Math.floor(input / 2) 
5 = 2
9 = 4
" ".repeat(spacesToClear) + "*".repeat(incrementer) + " ".repeat(spacesToClear);
spacesToClear -= 1,

first increment:
" _ _ * _ _ "
spacesToClear - 1, 
incrementer + 2.
second increment: 
" _ * * * _ "
spacesToClear -1 (now 0)
incrementer +2 (now 5)
third increment: 
"* * * * *"

And then do it backwards, incrementing spacesToClear. 


 
  

