function twice(number) {
  //let reverseNumber = String(number).split("").reverse().join("");
  let stringedNumber = String(number).split('');
  let half = Math.ceil(stringedNumber.length / 2);

  if((stringedNumber.length % 2) === 0) {
    const firstHalf = stringedNumber.slice(0, half);
    const secondHalf = stringedNumber.slice(half);
    if(Number(firstHalf.join('')) === Number(secondHalf.join(''))){
      return number;
    } else {
      return number * 2;
    }
  } else {
    return number * 2;
  }

}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676