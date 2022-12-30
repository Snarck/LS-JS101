function union (array1, array2){
  const arr = array1.concat(array2);
  console.log(arr);
  console.log(arr.filter((element, index) => arr.indexOf(element) === index ));

}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]


// concat the array into a single array
//use filter on the array to make sure there's no duplicates. 