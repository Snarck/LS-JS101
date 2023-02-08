const MEMO = {};

function fibonacci(num) {
    if(num < 2) {
      return num;
  } else if(MEMO[num]) {
    return MEMO[num]
  } else {
    MEMO[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return MEMO[num];
  } 
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
console.log(fibonacci(20));      // 6765
