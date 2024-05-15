// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time;
  switch (name) {
    case 'All or Nothing':
      time = 5;
      break;
    case 'Energizer':
    case 'Green Garden':
      time = 1.5;
      break;
    case 'Pure Strawberry Joy':
      time = .5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
    default:
      time = 2.5;
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const startingLimeCount = limes.length;
  let wedgesCut = 0;
  let i = 0;
  while (i < limes.length && wedgesCut < wedgesNeeded) {
    switch (limes[i]) {
      case 'small':
        wedgesCut += 6;
        break;
      case 'medium':
        wedgesCut += 8;
        break;
      case 'large':
        wedgesCut += 10;
        break;
    }
    limes.shift();
    console.log(wedgesCut);
  }
  return startingLimeCount - limes.length;
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  do {
    timeLeft -= timeToMixJuice(orders[i]);
    orders.shift();
  } while (i < orders.length && timeLeft > 0);

  if (orders.length === 0) {
    return [];
  } else {
    return orders;
  }
}


