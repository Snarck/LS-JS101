function multiplyList(arr1, arr2) {
  let arr3 = [];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    arr3.push(arr1[idx] * arr2[idx]);
  }
  console.log(arr3);
}



multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]