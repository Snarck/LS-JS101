function reverseWords(string) {
  let arrOfStr = string.split(" ");
  let output = arrOfStr.map(element => {
    if(element.length >= 5) {
      return element.split("").reverse().join("");
    } else {
      return element;
    }
  }).join(" ");
  console.log(output);
}




reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"