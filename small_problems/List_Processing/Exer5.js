// function leadingSubstrings(string) {
//   let substrings = []
//   for(let idx = 1; idx <= string.length; idx += 1) {
//     substrings.push(string.slice(0, idx))
//   }
//   return substrings;
// }


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

// function substrings(string) {
//   let array = [];
//   for(let idx = 0; idx < string.length; idx += 1) {
//    let substring = string.slice(idx);
//    array.push(leadingSubstrings(substring));
//   }
//   console.log(array.flat());
// }


console.log(substrings('abcde'));