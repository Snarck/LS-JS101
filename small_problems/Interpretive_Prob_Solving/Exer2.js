function diamond(maxAsterisk) {
  const DIAMOND = [];
  let diamondString;
  spacesToClear = Math.floor(maxAsterisk / 2);
  for (let count = 1; count < maxAsterisk; count += 2) {
    diamondString = 
    " ".repeat(spacesToClear) +
    "*".repeat(count) +
    " ".repeat(spacesToClear);
    spacesToClear -= 1;
    DIAMOND.push(diamondString);
  }
  for(let count = maxAsterisk; count >= 1; count -= 2) {
    diamondString = 
    " ".repeat(spacesToClear) +
    "*".repeat(count) +
    " ".repeat(spacesToClear);
    spacesToClear += 1;
    DIAMOND.push(diamondString);
  } 
  DIAMOND.forEach(element => {
    console.log(element);
  })
  
}
diamond(9);
diamond(5);
diamond(3);
diamond(15);

