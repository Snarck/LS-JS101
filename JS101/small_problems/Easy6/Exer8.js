function sequence(count, startingNum) {
  let arr = [];

  for(let start = 1; start <= count; start += 1) {
    arr.push(startingNum * start);
  } 

  console.log(arr);


}




sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []