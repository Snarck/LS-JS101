let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let name in munsters) {
  let formattedName = name[0].toUpperCase() + name.slice(1);
  let age = munsters[name].age;
  let gender = munsters[name].gender;

  console.log(`${formattedName} is a ${age}-year-old ${(gender)}.`)
}