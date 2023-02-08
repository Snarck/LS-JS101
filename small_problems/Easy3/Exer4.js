function findFibonacciIndexByLength (length) {

let n1 = 1n;
let n2 = 1n;
let count = 2n;
let fibonacci;

do{
  fibonacci = n1 + n2;
  count += 1n;
  first = second; 
  second = fibonacci;


} while (String(fibonacci).length < length);
return count;

}


console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

/*
We need to find the fibonnaci first. 
The fibonnaci should be something along the lines of:
sum = first number + second number
n5 = 
n = n-1 + n-2

in a do while loop
checking to see if the string length of the sum of fibonnaci is the same length as the original passed value. 
once it's the same, we return the number. 

*/