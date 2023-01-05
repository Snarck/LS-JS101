function leadingSubstrings(string) {
  let arr = string.split("").map((element, index, array) =>{
    return array.slice(0, index + 1).join("");
  })
  return arr;
}

function substrings(string) {
  let arr = string.split("").map((element, index, array) => {
    let substring = array.slice(index).join("");
    return leadingSubstrings(substring);
  })
  return arr.flat();
}


function palindromes(string) {
  console.log(
    substrings(string).filter(element => {
      if(element.length === 1) {
        return false;
      } else {
        let pal = element.split("").reverse().join("");
        return element === pal;
      }
    } )
  )
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]