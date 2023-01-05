
function multiplyAllPairs(array1, array2) {
  let productArr = [];
  array1.forEach(number => {
    array2.forEach(number2 => {
      productArr.push(number * number2);
    })
  })
  console.log(productArr.sort((a, b) => a - b));
}




multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
