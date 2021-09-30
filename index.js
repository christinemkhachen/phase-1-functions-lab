// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
  let distance = Math.abs(42 - pickUpLocation);
  // if (distance < 0) {
  //   return distance * -1;
  // } else {
  return distance;
  // }
}

function distanceTravelledInFeet(pickUp, dropOff) {
  let distance = pickUp - dropOff;
  if (distance < 0) {
    distance = distance * -1;
  }
  return distance * 264;
}

function distanceFromHqInFeet(pickUpLocation) {
  // let distance = 42 - pickUpLocation;
  // if (distance < 0) {
  //   distance = distance * -1;
  // }
  //return distance * 264;
  return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function calculatesFarePrice(pickUp, dropOff) {
  let distanceTravelled = distanceTravelledInFeet(pickUp, dropOff);
  if (distanceTravelled < 400) {
    return 0;
  }
  //we can combine these two if statements with  ||
  // if (distanceTravelled <= 2000) {
  //   return distanceTravelled * 0.02;
  // }
  // if (distanceTravelled >= 400) {
  //   return distanceTravelled * 0.02;
  // }

  if (distanceTravelled > 400 && distanceTravelled <= 2000) {
    return (distanceTravelled - 400) * 0.02;
  } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
    return 25;
  } else if (distanceTravelled > 2500) {
    return "cannot travel that far";
  }

  // The first four
  // hundred feet are free. For a distance between 400 and 2000 feet, the price is 2
  // cents per foot (not including 400, which are free!). Then Scuber charges a
  // flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber
  // does not allow any rides over 2500 feet — the function returns `'cannot travel that far'` if a ride over 2500 feet is requested.
}
