let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produce) {
  let fruits = {}
  for (const prop in produce) {
    if(produce[prop] === "Fruit"){
      fruits[prop] = produce[prop];
    }
  }
  console.log(fruits);
}


selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

