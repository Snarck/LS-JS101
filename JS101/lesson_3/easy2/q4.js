// Starting with the string:
let famousWords = "seven years ago...";
// show two different ways to put the expected "Four score and " in front of it.

let firstWords = "Four score and";

console.log(firstWords + " " + famousWords);
let thirdWords =  firstWords.concat(' ', famousWords);
console.log(thirdWords);

let arr = [firstWords, famousWords];
console.log(arr.join(' '));

let manyWords = firstWords += ' ' + famousWords;
console.log(manyWords);

