function triangle(degree1, degree2, degree3) {
  let degrees = returnValidTriangle([degree1, degree2, degree3]);
  console.log(degrees);
}

function returnValidTriangle(arr) {
  return !arr.includes(0) &&
    arr.reduce((accum, element) => accum + element) === 180 ?
    getTriangle(arr) : "invalid";
}

function getTriangle(arr) {
  return arr.every(element => element < 90) ? "acute" :
         arr.includes(90) ? "right" :
         arr.find(element => element > 90) ? "obtuse" : "invalid"; 
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
/*

input - three integers representing degrees
output - the type of triangle it is.

a triangle is:
to be valid:
- All angles must equal to exactly 180 degrees
- All angles must be greater than 0

right - one angle is exactly 90 degrees
acute - all three angles are less than 90 degrees
obtuse - one angle is greater than 90 degrees.

Convert triangles to an array.
make sure there's no 0s
reduce the sum to see if 180

check if acute (every angle is less than 90)
 - can use every()
check if right (one angle is exactly 90 degrees)
 - can use includes()
   - No more than one can be 90 and the triangle still be valid.
check if obtuse 
 - can use .find to find an element > 90. 


*/