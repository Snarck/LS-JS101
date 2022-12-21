// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

//no it will not.  return has to be in the same line as what it's returning. 
// return
// dog; 
// wouldn't return dog. 
