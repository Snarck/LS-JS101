let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let arr2 = arr.map(element => {
  if(typeof element[0] === "string") {
    return element.sort((a, b) => {
      // return b.codePointAt(0) - a.codePointAt(0);
      if(b > a) {
        return 1;
      } else if (b < a) {
        return -1;
      } else {
        return 0;
      }
    })
  } else {
    return element.sort((a, b) => b - a);
  }
})

console.log(arr2);