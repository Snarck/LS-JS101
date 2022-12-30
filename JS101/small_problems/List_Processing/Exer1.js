function sum(number) { 

  let sum = String(number).split("").reduce((accum, element) => 
  accum + Number(element), 0);
  console.log(sum);
}


sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45