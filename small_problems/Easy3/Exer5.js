function triangle (num) {
  let arr = [];

  for(let i = 1; i < num + 1; i += 1) {
    let string = "*".repeat(i);
    string = string.padStart(num);
    //console.log(string);
    console.log(" ".repeat(num - i) + "*".repeat(i));

  }
}

triangle(5);
triangle(9);