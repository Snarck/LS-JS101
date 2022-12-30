let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


let sumOfAges = Object.values(ages).reduce((accum, element) => accum + element);
console.log(sumOfAges);

//alternatively
let sum = 0;
Object.values(ages).forEach(element => sum += element );
console.log(sum);