// function leadingSubstrings(string) {
//   let substrings = []
//   for(let idx = 1; idx <= string.length; idx += 1) {
//     substrings.push(string.slice(0, idx))
//   }
//   console.log(substrings);
// }


function leadingSubstrings(string) {
  let arr = string.split("").map((element, index, array) =>{
    return array.slice(0, index + 1).join("");
  })
  console.log(arr);
}


leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]