
//turn a string of numbers into numbers without using Numbers or parseInt
//Wants you to analyze characters in a string. 

function stringToInteger(string) {
  numbers = {
    "1" : 1,
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "0" : 0
  }
  let arr = string.split('').map(element => numbers[element]);
  let value = 0; 
  arr.forEach(element => (value = (10 * value) + element));
  //return value;
  //return +string;
  return string * 1;
}


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


// I would just typically use +String or string * 1; 