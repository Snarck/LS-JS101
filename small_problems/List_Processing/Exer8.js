function buyFruit (array) {
  let outputArray = [];
  array.forEach(subArr => {
    for(let idx = 0; idx < subArr[1]; idx += 1){
      outputArray.push(subArr[0]);
    }
  })
   console.log(outputArray);
}




buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]