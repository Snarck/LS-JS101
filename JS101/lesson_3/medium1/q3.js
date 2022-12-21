// Alan wrote the following function, which was intended to return all of the factors of number:
/*
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
*/

function factors(number) {
  let divisor = number;
  let factors = [];
  while(divisor > 0) {
    if (number % divisor === 0 ) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(6));
console.log(factors(0));
console.log(factors(-1));
console.log(factors(100));
