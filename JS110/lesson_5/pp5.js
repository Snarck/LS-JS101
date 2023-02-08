let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
let sum = 0;
Object.keys(munsters).forEach(element => {
  if(munsters[element]["gender"] === "male") {
    sum += munsters[element]["age"]
  }
});
console.log(sum);
let sum2 = 0;
let values = Object.values(munsters);
values.forEach(element => {
  if(element.gender === "male") {
    sum2 += element.age;
  }
})
console.log(sum2);
