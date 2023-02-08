function stringy (num) {
  let str = "";

  while(num > 0){
    str += (str.charAt(str.length - 1)) === "1" ? "0" : "1";
    num -= 1;
  }
  return str;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"