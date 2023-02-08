function swapName(string) {
  let fullName = string.split(" ");
  let lastName = fullName.slice(fullName.length -1);
  let firstName = fullName.slice(0, fullName.length -1).join(" ");
  console.log(`${lastName}, ${firstName}`);
  // return name.split(' ').reverse().join(', ');

}




swapName('Joe Roberts');    // "Roberts, Joe"
swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"