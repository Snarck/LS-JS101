let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
console.log(
Object.keys(munsters).filter(element => munsters[element].gender === "male")
                     .reduce((accumulator, currentValue) => {
                      currentValue = munsters[currentValue].age;
                      return accumulator += currentValue;
                     }, 0)
                     )                    