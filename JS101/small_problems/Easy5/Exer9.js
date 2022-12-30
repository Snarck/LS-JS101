let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

const VEHICLE_INV = { 

};

function countOccurrences(vehiclesArr) {

 
  vehiclesArr.forEach((element) => {
    let automo = element.toLowerCase();
    if(Object.hasOwn(VEHICLE_INV, automo)) {
      VEHICLE_INV[automo] = VEHICLE_INV[automo] + 1;
    } else {
      VEHICLE_INV[automo] = 1;
    }

  })
  logVehicles(VEHICLE_INV);

}

function logVehicles(obj) {
  
  for (const [key, value] of Object.entries(VEHICLE_INV)) {
    console.log(`\n${key} => ${value}`);
  }
}


countOccurrences(vehicles);


/*
log each element to vehicle count as well as the number of times it pops up.
Let's make an object to store the amount of cars on the lot.
For each new car we find, we'll update the object with the car.  If it includes the car, we update the counter.
Otherwise we instantiate the object along with the counter of 1. 

we can use Object.hasOwn(VEHICLE_INV, "ArrayElement") (true) {
  VEHICLE_INV[ArrayElement] = VEHICLE_INV[ArrayElement] + 1
} else {
  create the value with the counter 1. 
}



*/