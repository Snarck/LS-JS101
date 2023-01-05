let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let member in munsters) {
  let name = member[0].toUpperCase() + member.substring(1);
  let age = munsters[member]["age"];
  let gender = munsters[member]["gender"];
  console.log(`${name} is a ${age}-year-old ${gender}.`);
}

Object.entries(munsters).forEach(element => {
  let name = element[0][0].toUpperCase() + element[0].substring(1);
  let age = element[1].age;
  let gender = element[1].gender;
  console.log(`${name} is a ${age}-year-old ${gender}.`);
})

// two ways.