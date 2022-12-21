
function greetings(array, object) {
  let fullName = array.join(" ");
  let title = object.title + " " + object.occupation;
  console.log(`Hello, ${fullName}! Nice to have a ${title} around.`);
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });