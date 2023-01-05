function rotateRightmostDigits(number, count) {
  let numberArr = String(number).split("");
  let digits = numberArr.splice(numberArr.length - count);
  let rotate = Number(numberArr.concat(digits.slice(1), digits[0]).join(""));
  return rotate;
}

function maxRotation(number) {
  let counter = String(number).length;
  while(counter > 0) {
    number = rotateRightmostDigits(number, counter);
    counter -= 1;
  }
  console.log(number);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845



/*

input number
output number rotated the maximum amount of times. 

understand:
 - scroll the number so the first number gets pushed to the end.
 - The new first number becomes locked in place and you rotate the substring.
 - the second number becomes locked in place and you rotate the substring
 - repeat until finished.
 - use function "rotateRightmostDigits" to rotate. 
  - takes a number and the number of digits to rotate 
  - returns the string with the rotated digits
  - e.g. 1234, 2 = 1243
  - 735291 6 would give 352917
 
Data
 - Working with a string of rotated numbers. 
 - we can work with the string.length method to get the digit count. 

counter = string.length (735291) 
loop through counter reducing it by one.
735291 (length(6)) = 
352917 (length(5))
329165 (length(4))
321659 ...etc. 
 
 Algorithm:
  Because we have the rotateRightmostdigits to do the heavy lifting. 
  We can work with the string.length
  A simple for loop would do the heavy lifting for us, counting down.



*/