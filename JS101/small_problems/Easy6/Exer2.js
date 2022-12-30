function doubleConsonants(string) {
  const regex = /[aeiouAEIOU1-9]/;
  console.log(string.split("").map((element) => {
   return element.match(regex) ? element : element + element
  }).join(""))
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""


// input: a String
// output: new String, doubled letters but not consonates.String

// Can use a map? 
