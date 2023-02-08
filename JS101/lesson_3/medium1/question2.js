let munstersDescription = "The Munsters are creepy and spooky.";

function changeMunster (sentence) {
  return sentence.split("").map(word => {
    return word === word.toUpperCase() ? word.toLowerCase() : word.toUpperCase();
  }).join("");
}

console.log(changeMunster(munstersDescription));