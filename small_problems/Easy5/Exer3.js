function halvsies(arr) {
  let arr1 = arr.slice(0, Math.ceil(arr.length / 2));
  let arr2 = arr.slice(arr1.length, arr.length);
  let arr3 = [arr1, arr2];
  console.log(arr3);
}




halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]