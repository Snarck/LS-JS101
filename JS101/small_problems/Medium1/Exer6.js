function fibonacci(num) {
    if(num < 2) {
      return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

/*
fibonacci is 
sum + sum 
first 2 sums are 1
1  1
2  1
3  2
4  3
5  5
6  8
7  13
8  21
9  

*/