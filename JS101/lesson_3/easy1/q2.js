//How can you determine wheter a give string ends with an excalamation mark?

let str1 = "Come over here!".endsWith("!"); // true
let str2 = "What's up, Doc?".endsWith("!"); // false
console.log(`${str1}\n${str2}`);

//can also do charAt[str1.length -1];