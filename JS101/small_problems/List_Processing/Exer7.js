function sumOfSums(numberArr) {
  let sum = 0;
  for(let idx = 1; idx <= numberArr.length; idx += 1){
    sum += numberArr.slice(0, idx).reduce((accum, num) => accum + num);
  }
  console.log(sum);
}




sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35