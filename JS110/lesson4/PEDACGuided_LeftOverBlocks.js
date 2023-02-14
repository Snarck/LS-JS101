function calculateLeftoverBlocks(number) {
  let layer = 1;
  while(true) {
    let blocksNeeded = layer * layer;
    if(number < blocksNeeded) {
      return number;
    } else {
      number -= blocksNeeded;
      layer += 1;
    }
  }
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true