function createUUID () {
  const UUID = ["a", "b", "c", "d", "e", "f", "0",
      "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let length = UUID.length;
  let sections = [8, 4, 4, 4, 12];
  let finished = [];

  sections.forEach(iterations => {
    let temp = [];
    for(let idx = 0; idx < iterations; idx++) {
      temp[idx] = UUID[randomIndex(length)]
    }
    finished.push(temp.join("") + "-")
  })
  return finished.join("")
}

function randomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength) - 1;
}

let uuid = createUUID();
uuid = uuid.slice(0, uuid.length - 1)
console.log(uuid);