let a = 2; //2 
let b = [5, 8]; // [5, 8]
let arr = [a, b]; // [2, [5, 8]]

arr[0] += 2; // [4, [5,8]]
arr[1][0] -= a; // [4, [3, 8] // a is a primal, not referenced in array.


//final values will be 
