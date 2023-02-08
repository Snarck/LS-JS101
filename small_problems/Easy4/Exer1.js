function getAge(min, max) {
  let randomizeTeddysAge = Math.random() * (max - min) + min;
  return Math.floor(randomizeTeddysAge);
}


let number = 0;
while(number < 120) {
  console.log(`Teddy is ${getAge(20, 120)} years old!`);
  number += 1;
}
