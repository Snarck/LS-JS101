function isBlockWord(str) {
  let blocks = [
    ["B", "O"], ["X", "K"], ["D", "Q"], ["C", "P"], ["N", "A"],
    ["G", "T"], ["R", "E"], ["F", "S"], ["J", "W"], ["H", "U"],
    ["V", "I"], ["L", "Y"], ["Z", "M"]
  ]
  let strArray = str.split("");
  //let duplicateNotFound = false;
  let checker = [];

  strArray.forEach(element => {
    for (let idx = 0; idx < blocks.length; idx += 1) {
      if (blocks[idx].includes(element.toUpperCase())) {
        blocks.splice(idx, 1);
        checker.push(element);
        break;
      }
    }
  })
console.log(checker.join("").toUpperCase() === str.toUpperCase());



}



isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true