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
  return value;
  //return +string;
  //return string * 1;
}

function stringToSignedInteger(string){
  switch(string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
      case "+":
        return stringToInteger(string.slice(1, string.length));
      default: 
      return stringToInteger(string);
  }
}




console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true