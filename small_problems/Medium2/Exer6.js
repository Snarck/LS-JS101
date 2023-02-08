function sumSquareDifference(number) {
  let squareSum = 0;
  let sumSquare = 0;

  for(let idx = 1; idx <= number; idx += 1) {
  squareSum += idx;
  sumSquare += Math.pow(idx, 2);
  }

  console.log(Math.pow(squareSum, 2) - sumSquare);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150