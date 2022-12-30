let statement = "The Flintstones Rock";
let flintstones = {};

statement.split('').forEach(element => {
 if(element !== " ") {
  if(Object.hasOwn(flintstones, element)){
    flintstones[element] = flintstones[element] += 1;
  } else {
    flintstones[element] = 1;
  }
 }
})

console.log(flintstones);


