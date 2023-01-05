function fibonacci(nth){
let arr = [1, 1];
  for(let idx = 3; idx <= nth; idx += 1) {
    arr = [arr[1], arr[0] + arr[1] ];
  }
  console.log(arr[1]);


}




fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050