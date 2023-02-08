function star(count) {
  let iterator = Math.floor((count / 2));
  let end = iterator - 1;
  let start = 0;
  let stars = [];

  for(let i = 0; i < iterator; i += 1) {
   let str = " ".repeat(start) + "*" + " ".repeat(end);
   str = str + "*" + str.split("").reverse().join("");
   stars.push(str);
   start += 1; 
   end -= 1;
  }
  stars.push("*".repeat(count));
  
  for (let i = iterator - 1; i >= 0; i -= 1) {
    stars.push(stars[i]); 
  }

  stars.forEach(element => {
    console.log(element);
  })


}


star(7);
star(9);