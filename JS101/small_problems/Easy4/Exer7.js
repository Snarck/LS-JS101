function runningTotal(array) {
  const total = array.map((element, index, array) => {
    return array[index] += array[index - 1] ? array[index - 1] : 0; 
  })
  console.log(total);
}

function runningTotalFor(array) {
  let sum = 0;
  let summedArray = [];

  for(let index = 0; index < array.length; index += 1) {
    array[index] += array[index - 1] ? array[index - 1] : 0;
    summedArray.push(array[index]);
  }
  console.log(summedArray);
}


runningTotalFor([2, 5, 13]);             // [2, 7, 20]
runningTotalFor([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotalFor([3]);                    // [3]
runningTotalFor([]);                     // []