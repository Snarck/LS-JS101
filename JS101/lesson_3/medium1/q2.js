// Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";
/*
const ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let arr = [];


let munsters = munstersDescription.split('');

let mDesc = munsters.map(element => {
  if(ABC.indexOf(element) !== -1) {
    return element.toUpperCase();
  } else {
    return element.toLowerCase();
  }
}).join('');

console.log(mDesc);
*/
console.log(munsters.map(element => {
  if(element === element.toUpperCase()){
    return element.toLowerCase()
  } else {
    return element.toUpperCase();
  }
}).join(""));

//tried it a bunch of different ways with a lot of refactors. 

/*
let mDesc = munsters.reduce(
  (accum, element) => {
  if (ABC.indexOf(element) !== -1) {
    console.log(element.toUpperCase());
    mDesk += element.toUpperCase()
  } else {
    mDesk += element.toLowerCase();
  } 
}, "");
*/

