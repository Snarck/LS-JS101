function compressConsonate(arrayOfStrings) {
  let consonates = [];
  arrayOfStrings.forEach(element => {
    let truncatedString = element.replace(' ', '').replace(/[aeiou]/g, " ").replace(/\s\s+/g, " ").split(" ");
    consonates.push(truncatedString);
  });
  return findLargestConsonate(consonates);
}

function findLargestConsonate(consonates) {
  consonates.forEach(element => {
    element.sort((a, b) => {
      return b.length - a.length;
    })
  })
  return consonates;
}

function createObjectOfConsonates(arrayOfConsonates, stringOfWords) {
  let consonateCount = {};
  arrayOfConsonates = findLargestConsonate(arrayOfConsonates);
  for (let idx = 0; idx < stringOfWords.length; idx += 1) {
    consonateCount[stringOfWords[idx]] = 
    arrayOfConsonates[idx][0].length > 0 ? arrayOfConsonates[idx][0].length : 1;
  }
  return consonateCount;
}

 function sortArrayOfStrings(object) {
  let arrOfStrings = Object.entries(object);
  arrOfStrings.sort((a, b) => {
    return b[1] - a[1];
  })
  return arrOfStrings;

 }
 
function sortStringsByConsonants(arrayOfStrings) {
  let consonateCount = createObjectOfConsonates(compressConsonate(arrayOfStrings), arrayOfStrings);
  let sortedArray = sortArrayOfStrings(consonateCount);
  return sortedArray.map(element => element[0]);
}



console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa']));
 // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); 
// ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); 
// ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); 
// ['month', 'day', 'week', 'year']
