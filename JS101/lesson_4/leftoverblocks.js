function calculateLeftoverBlocks(cubes) {
  let structure = 1;
  let cubedStructure = 0;

  if(cubes === 0) {
    return cubes;
  }

  while(true) {
    cubedStructure = structure * structure;

    if(cubedStructure > cubes) {
      return cubes
    }
    cubes -= cubedStructure;
    structure += 1;
  } 
}


console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true