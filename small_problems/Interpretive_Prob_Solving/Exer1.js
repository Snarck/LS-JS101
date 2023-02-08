function lightsOn(switches) {
  const LIGHT = {
    number : 0,
    switch : false,
  }
  let lamps = [];
  for(let i = 0; i <= switches; i += 1) {
    let light = Object.create(LIGHT)
    light["number"] = i;
    lamps.push(light);
  }
  for(let count = 1; count <= switches; count += 1) {
    for (let toggle = 1; toggle <= switches; toggle += 1) {
      if(lamps[toggle]["number"] % count === 0) {
        lamps[toggle]["switch"] = !lamps[toggle]["switch"]
      }
    }
  }
  lamps = lamps.filter(element => element["switch"]).map(element => element["number"]);
  console.log(lamps)
  return lamps
  }

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]