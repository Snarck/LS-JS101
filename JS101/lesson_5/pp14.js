let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


// return an array containing the colors of the fruits and sizes of vegetables
// the size should be uppercase eg. SMALL and the color capitalized
// e.g. Red, Green.  grape.includes(fruit)
//stole this from the solution (the capitalize part) really need to do this
// more often!
let capitalize = string => string[0].toUpperCase() + string.substring(1); 

let arr = Object.values(obj).map(subObj => {
  if(subObj["type"] === "fruit") {
    return subObj["colors"].map(color => capitalize(color));
  } else {
    return subObj["size"].toUpperCase();
  }
})

console.log(arr);