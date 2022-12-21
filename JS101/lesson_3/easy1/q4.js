//Using the following string, create a new string that contains all lowercase
//letters except for the first character, which should be capitalized. (See the example output.)


let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let reformattedMunsterDescription = munstersDescription.toLowerCase().slice(1, -1);
console.log(munstersDescription.slice(0, 1).toUpperCase() + reformattedMunsterDescription)

console.log(munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase());

// two of many different ways. 
