let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let object = Object.fromEntries(flintstones.map((element, index) => {
  return element = [element, index];
}))
console.log(object);


// Alternatively, can use 
// forEach element, index flintstonesObject[index] = [index]. 
