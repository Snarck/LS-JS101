function xor (arg1, arg2) {
  if ((arg1 && !arg2) || (!arg1 && arg2)) {
    return true;
  }
  return false;


}

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));


