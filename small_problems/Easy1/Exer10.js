function multisum(num) {
  let sum = 0;
  for (let inc = 1; inc < (num + 1); inc += 1) {
    sum += (inc % 3) === 0 || (inc % 5) === 0 ? inc : 0;
  }
  return sum;

}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
