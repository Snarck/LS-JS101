function expandedForm(num) {
  let finished = ["1", "2"];
  let arr = String(num).split("").
  // arr.forEach(element => {
  //   finished.push(element.padEnd(arr.length, "0"))
  // });

  console.log(finished);
  //return finished.join(" + ");
}


expandedForm(123);