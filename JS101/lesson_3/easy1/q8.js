// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");
flintstones.unshift("Dino2");
flintstones[flintstones.length] = "Dino3";

// three ways

console.log(flintstones);