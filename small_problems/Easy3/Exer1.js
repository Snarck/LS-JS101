function crunch(string) {

  let crunchy = string.split('')
  let newString = crunchy.shift();
  let newArr = [newString];

  while (crunchy.length) {
    if (crunchy[0] === newString) {
      crunchy.shift();
    } else {
      newString = crunchy.shift()
      newArr.push(newString);
    }
  }

  return newArr.join('');

}



console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

/*

store intial value (crunchy[0] )
iterate through array
if a value === newString, pop it.
if value !== newString, add it to array, update newString
repeat until array is empty. 

*/