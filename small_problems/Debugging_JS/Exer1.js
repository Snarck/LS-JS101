let ladder = '';
let arr = 
['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail
