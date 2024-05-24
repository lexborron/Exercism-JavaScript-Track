// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let type = card;
  let count = 0;
  stack.forEach(card => {
    if (card === type)
      count++;
  })
  return count;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  if (type) {
    return evenCount;
  } else {
    return oddCount;
  }
}
