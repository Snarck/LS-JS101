let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr.map(element => {
  if(typeof element[0] === "string") {
    return element.slice().sort((a, b) => {
      if(a > b) {
        return -1;
      } else if ( a < b) {
        return 1;
      } else {
        return 0;
      }
    })
  } else {
    return element.slice().sort((a, b) => b - a );
  }
}));

