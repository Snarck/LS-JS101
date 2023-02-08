function triangle(side1, side2, side3){
  let triangle = [side1, side2, side3].sort((a, b) => a - b);
  
  if(triangle.includes(0)){ return console.log("invalid"); };
  if((triangle[0] + triangle[1]) < triangle[2]) { return console.log("invalid")};
  if(triangle.every(element => element === triangle[0])) { 
    return console.log("equilateral")};
  
  return triangle[0] === triangle[1] || triangle[1] === triangle[2] ?
  console.log("isoceles") : console.log("scalene");

}




triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"


/*
input - three integers representing the sides of a triangle
output - "equilateral", "isosceles", "scalene", "invalid" string.

All sides must have lengths greater than zero.
the sum of the two shortest sides must be greater than the longest side. 

Equilateral - three sides are of equal length 
e.g, 5, 5, 5
Isosceles - Two sides are of equal length while the third is different.
e.g. 5, 5, 3
Scallene = all three sides are different:
1, 2, 3.
invalid = none of the above: 
0, 3 3

Write a function that takes the three integers and outputs what kind of triangle
it is.  "equilateral, isosceles, scallene, invalid"

test cases 

triangle(3, 3, 3);        // "equilateral" - 3, 3, 3 (equilateral)
triangle(3, 3, 1.5);      // "isosceles" 3, 3 - 1.5
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid" 
triangle(3, 1, 1);        // "invalid" 

We have to: 
If we add all three digits to an array, we can collect information to rule out
each of the four choices:

We can sort it lowest-highest, 
invalid = compare the two lowest values to the third
invalid = includes(0)?  

compare first two values, false
compare  second and third value, 
if true, isoceles, if false, scalene. 


compare first two values, true
  compare second and third values
  false - isoceles
  true - equilateral



isosceles compare first two values, if true, compare second and third. if true, it's a equilateral, 
scalene 



*/
