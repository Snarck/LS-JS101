## Problem ##

You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

    The building blocks are cubes
    The structure is built in layers
    The top layer is a single block
    A block in an upper layer must be supported by four blocks in a lower layer
    A block in a lower layer can support more than one block in an upper layer
    You cannot leave gaps between blocks

Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

 * Questions 
 - What happens if you pass a negative number? 
 - 

 * Output:
   The number of blocks left over.
   an integer 
  
 * Input: 
   A specific number of cubes that make up the structure.
   An integer

 * Explicit 
 - For every one block, there has to be 4 supporting blocks beneath it.
 - The top layer consists of one block, decending down to more and more blocks. 
 - Supporting blocks can support more than one block. 
  - Cubes are 3D and six-sided.

 * Implicit
 - number of blocks correlates to number squared.
 - The value needed is the sum of squares minus the input.
 - You can't make a struture using the excess squares. 
 - Because the number of blocks correlates to the number squared, we can use
   the root of the number as it's row number. 


## DATA STRUCTURE ##
  - Row of cubes representing the amount of cubes needed to create the row.
  - Each row is that row squared increments to the next number squared. 
  - The sum of the rows equals the amount of cubes needed for that row.
  - If there's not enough cubes to build a row, those are returned. 
  - I feel as if math is the answer.  Keep incrementing the rows by square while subtracting the value
    from input

 ## Structure ##
INPUT 25
OUTPUT 

[1]             (1 x 1 = 1)  = 25 - 1 (24)
[4][ ]          (2x2 + 1 = 5) 24 - 4 = 20
[9] [ ] [ ]     (3x3 + 5 = 14) 20 - 9 = 11
[16]            (4x4 + 14 = 30) 11 - 16 NOPE, return 11.
[25]            (5 * 5 + 30 = 55)

Same again but with input 14:

[1]  14 - 1 = 13
[4]  13 - 4 = 9
[9]  9 - 9 = 0
[16]



//////////////////////////////

         [-]     1 x 1 = 1
       [-] [-] - 2 x 2 = 4
     [-] [-] [-] 3 x 3 = 9
    [-][-] [-][-]4 x 4 = 16
    .............5 x 5 = 25
    
         [1]
       [2 , 2]
 [3,3,3,3,3,3,3,3,3]





  ## Test cases ##

leftoverblocks:
input 0 ==> output 0. 
input 1 ==> output 0
input 2 ==> output 1
input 4 ==> output 3
input 5 ==> output 0
input 5 ==> output 6
input 14 ==> output 0


## ALGORITHM ##

1: Create a function that takes the parameter outlined in the problem (cubes)
2: Create an integer to represent an abstract structure and the amount of cubes.
3: Create an integer to represent the input to be subtracted. 
3.1: If cube is 0, return it. 
4: Repeatedly increment the structure 1
  - For each repeat:
  - Increment the amount of rows.
  - The amount of cubes in each row is the row squared. 
  - Subtract from the input to be subtracted the amount of cubes in each row.
  - increment Structure by 1. 
5: Stop incrementation when the amount to be subtracted can no longer be subtracted. 
6: Return any remainder. 

## MODEL ##

structure = 0
subtract = 25

REPEAT:
structure 1 * 1 = 1
is sub >= structure
no, sub - 1 (24)
structure 2 * 2 = 4
is sub >= structure
no, sub - 4 ( 20 )
etc...

