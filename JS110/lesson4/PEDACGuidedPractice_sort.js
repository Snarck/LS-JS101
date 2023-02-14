function sortStringsByConsonants(array) {
  let sorter = [];
  let consonants = ["a", "e", "i", "o", "u", undefined];

  array.forEach(element => {
    let count = 0;
    for (let i = 0; i < element.length; i++) {
      if (!consonants.includes(element[i])) {
        if(!consonants.includes(element[i - 1]) || !consonants.includes(element[i + 1])) {
          count += 1;
        }
      } else { 
        continue;
      }
    }
    sorter.push([count]);
    count = 0;
  })

  array.sort(function(a, b) {
    let aIndex = array.indexOf(a);
    let bIndex = array.indexOf(b);
    return sorter[bIndex] - sorter[aIndex];
  });

  return array;


}




console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']