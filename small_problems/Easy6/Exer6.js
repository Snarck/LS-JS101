function sequence(number){
  const nums = [];
  for(let idx = 1; idx <= number; idx += 1) {
    nums.push(idx);
  }
  console.log(nums);
}



sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]