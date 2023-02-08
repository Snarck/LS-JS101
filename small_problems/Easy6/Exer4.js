function centerOf(string) {
  let newString = "";
  if(string.length % 2 === 0) {
    newString = string.slice(((string.length / 2) - 1), (string.length / 2) + 1)
  } else {
    newString = string.slice(string.length / 2, (string.length / 2) + 1);
  }
  console.log(newString)
}



centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"