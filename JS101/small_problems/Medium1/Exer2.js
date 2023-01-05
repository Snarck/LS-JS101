function rotateRightmostDigits(number, count) {
  let numberArr = String(number).split("");
  let digits = numberArr.splice(numberArr.length - count);
  
  let rotate = Number(numberArr.concat(digits.slice(1), digits[0]).join(""));

  return rotate;
}

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917



/*  Input: number, count
//  output: edited number.
//
count is the number of digits in the number
remove the digit, put it at the beginning. 
shift everything forward one. 

splice can do this.  
return a string of the updated number. 
// 7...1 digit 1 = 1 rotate.
// 7..91 2 = rotate two digits. 
// 7...91 = 7..19
// 3 digit
// 7..291 = 7..912
// 4 digit 
// 7..5291 = 7..2915

convert the number into a array of characters.
splice the array at the count index
 - the index would length of the array - digit.
 move the first index to the last.
 concat arrays
 join arrays. 
*/