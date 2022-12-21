// What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// i was wrong, value1 is changed. 
// Shallow copies (like performed by slice) 
/*
Only makes a duplicate of the outermost values in an array or object.
the stored object (first and second) are shared between them, it's a shallow clone.. that includes 
the clone of the pointer to the first/second object.  
Shallow cloning is like 
let arr = arrOfDogs;
but with primals still being independent, but objects still sharing pointers.
*/