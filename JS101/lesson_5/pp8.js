let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
let vowels = ["a", "e", "i", "o", "u"];


Object.values(obj).forEach(element => {
  element.join("").split("").forEach(ele => {
    if(vowels.includes(ele.toLowerCase())){
      console.log(ele);
    }
  })
})