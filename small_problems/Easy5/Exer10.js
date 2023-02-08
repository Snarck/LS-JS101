function average(arr) {
  sum = Math.floor(arr.reduce((accum, element) => accum + element) / arr.length);
  console.log(sum);
}

function averageFor(arr){
  let sum = 0;
  for(let idx = 0; idx < arr.length; idx += 1){
    sum += arr[idx];
  }
  console.log(Math.floor(sum / arr.length));
}

function averageForEach(arr) {
  let sum = 0;
  arr.forEach((element) => sum += element );
  console.log(Math.floor(sum / arr.length));
}



averageFor([1, 5, 87, 45, 8, 8]); 
averageForEach([1, 5, 87, 45, 8, 8]);
average([1, 5, 87, 45, 8, 8]);      // 25
averageFor([9, 47, 23, 95, 16, 52]);    // 40
averageForEach([9, 47, 23, 95, 16, 52]);
average([9, 47, 23, 95, 16, 52]);
