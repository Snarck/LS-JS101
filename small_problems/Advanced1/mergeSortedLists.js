function merge(arr1, arr2) {
 let newArr = [];
 let leftArr = arr1.slice();
 let rightArr = arr2.slice();

 while(leftArr.length > 0 && rightArr.length > 0) {
  if (leftArr[0] <= rightArr[0]) {
    newArr.push(leftArr.shift());
  } else {
    newArr.push(rightArr.shift())
  }
 }
console.log(newArr);
}




merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]