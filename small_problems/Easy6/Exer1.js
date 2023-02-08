// function repeater(string) {
//   let newStr = "";
//   for (let idx = 0; idx < string.length; idx += 1) {
//     newStr += string[idx] + string[idx].trim();
//   }
//   return console.log(newStr);
// }



function repeater(string) {
  return console.log(string.split("").map(element => element + element).join(""));
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""