function bubbleSort(arr) {
  let swapping = true;
  while(swapping) {
    swapping = false;
    for(let idx = 1; idx < arr.length; idx += 1) {
      if(arr[idx - 1] > arr[idx]) {
        let temp = arr[idx - 1];
        arr[idx - 1] = arr[idx];
        arr[idx] = temp;
        swapping = true;
      } 
    }
  }
}

console.log("but this does?");



let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/*

if index (idx - 1) > idx 
 swap store element 1 in variable, 
 replace element 1 with element 2, replace element 2 with variable.
 
 while (swapping) 
 swapping = false; 
 for (idx = 1 < arr idx +=1) 
   if(idx - 1 < idx) {
    swap
    swapping = true
   } 

*/