let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = "aeiou";

Object.values(obj).forEach(arr => {
  arr.forEach(element => {
    element.split("").forEach(char => {
      if(vowels.includes(char.toLowerCase())) {
        console.log(char);
      }
    })
  })
})