let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


function transactionsFor(id, list){
  let comp = list.filter(obj => obj["id"] === id);
  return comp;
}

function isItemAvailable(id, list) {
  let sum = transactionsFor(id, list).map(subObj => {
    let quantity = subObj["quantity"];
    return subObj["movement"] === "in" ? quantity : -quantity;
  }).reduce((accum, element) => accum + element);

  console.log(sum > 0);
}

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true



