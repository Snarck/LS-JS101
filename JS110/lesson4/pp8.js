let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintObjs = {};
flintstones.forEach((element, index) => {
  flintObjs[element] = index;
})
console.log(flintObjs);