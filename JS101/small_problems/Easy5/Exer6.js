function multiplicativeAverage(array) {
  let sum = array.reduce((accum, element) => element * accum, 1) / array.length;
  console.log(sum.toFixed(3));
}




multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"