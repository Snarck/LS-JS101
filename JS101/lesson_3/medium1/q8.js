// One day, Spot was playing with the Munster family's home computer,
//and he wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

console.log(messWithDemographics(munsters));

//Re-evaluate this.
// Objects are passed by reference, so the original pointer is demoObject (munsters)
// Munsters.values().forEach(element => { }) -- Yeah I see now. While this function
// shouldn't return anything, it's still manipulating the information - we're still 
// using the object as a pointer to the data, it becomes Herman["age"]... because
//that's the value on the array. 


