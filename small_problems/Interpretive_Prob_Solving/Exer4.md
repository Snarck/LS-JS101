Write a function that displays an 8-pointed star in an NxN grid, where N is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

Input: integer representing length of star
output: the star itself

-The asterisk on the top and bottom are always three. 
 * _ _ * _ _ *
 _ * _ * _ * _
 _ _ * * * _ _
-There's always an asterisk in the middle.
- The middle row is always the maximum number of stars.


Datastructure:

Working with a integer of 9:
1 2 3 4 5 6 7 8 9
* _ _ _ * _ _ _ * 
_ * _ _ * _ _ * _
_ _ * _ * _ * _ _
_ _ _ * * * _ _ _
* * * * * * * * *
If we split this into two problems: 
* _ _ _ *
_ * _ _ *
_ _ * _ *
_ _ _ * *

start = 0; end = 3; 
"_".repeat(0) + "*" + "_".repeat(end);
start + 1, end - 1. 
start(0)
* _ _ _".reverse() = 
_ _ _ *"
start + 1, end - 1
"_ * _ _".reverse() =
"_ _ * _"

How do we get end? 
9 / 2 = foored = 4 - 1? 
(- 1 for star) 


algo:

Get the start and end
Instantiate an array for easier output and later duplication.
Build the "left" side of the start
* _ _ _ *
        *
        *
Reverse it to get the right side.
Join them
* _ _ _ * _ _ _ *
Increase start, decrease end. 
Create middle area 
**********
iterate through array, skipping middle area, and iterating backwards to get the bottom half. 
