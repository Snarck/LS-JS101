//Create a string of 32 randomized characters [a-f] and [0-9]
// With a function containing no arguments
// input: none
// output: randomized string.
// format:
// 32 character string
// 8 - 4 - 4 - 4 - 12

function randomChar () {
  const charRange = "abcdef0123456789";
  let randomIndex = Math.floor(Math.random() * charRange.length);
  return charRange[randomIndex];
}

function uuidCreation () {
  const UUID = [];
  const format = [8, 4, 4, 4, 12];

  format.forEach(counter => {
    let string = "";
    for(let idx = 1; idx <= counter; idx += 1) { 
      string += randomChar();
    }
    UUID.push(string);
  })
  return UUID;
}

console.log([...uuidCreation()].join("-"));