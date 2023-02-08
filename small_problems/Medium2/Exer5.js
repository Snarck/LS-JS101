const SEVEN = 7;
const MAX = "9876543201";

function featured(featuredNum) {
  if(featuredNum >= MAX) {
    return console.log("There is no possible number that fulfills those requirements.");
  }
  while(true) {
    featuredNum = getDivisibleSeven(featuredNum);
    if(!containsDuplicates(featuredNum)) {
      break;
    }
  }
  console.log(featuredNum);
}

function getDivisibleSeven(num) {
  if(num % SEVEN === 0 && num % 2 > 0) {
    return num + (SEVEN * 2);
  } else if (num % SEVEN === 0) {
    return num + SEVEN;
  } else {
    return num + (SEVEN - (num % SEVEN)); 
  }
 // return num % SEVEN !== 0 ? num + (SEVEN - (num % SEVEN)) : num + SEVEN;
}

function containsDuplicates(num) {
  let arr = String(num).split("").sort((a, b) => a - b);
  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    if(arr[idx] === arr[idx + 1]) {
      return true;
    }
  }
  return false;
}



featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
/*

input:  integer
output: next featured number greater than the integer. 

A featured number is:
 - an odd number 
 - divisible evenly by 7
 - with each digit occuring exactly once

 If it meetss the first two requirements,
 we can check if each digit is occuring exactly once with:
 
 copy and sort the arr, 
 start the index one lower to avoid throwing an exception/undefined
 check if index 1 = index 2, 
 if true, return contains duplicates.
 
otherwise, increment the number by 7, repeat, until we find a new
featured number and return that. 
 
 make an array starring every digit.  Might be able to use a filter to check. 

*/