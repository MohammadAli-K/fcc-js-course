let count = 0;

function cardCounter(card) {
  // return typeof card;
  if (typeof card == 'string' || typeof card == 'number') {
    if (card >= 2 && card <= 6) {
      count = count + 1;
    } else if (
      card == 10 ||
      card == 'J' ||
      card == 'Q' ||
      card == 'K' ||
      card == 'A'
    ) {
      count = count - 1;
    }

    if (count <= 0) {
      return `${count} Hold`;
    } else {
      return `${count} Bet`;
    }
  }
}
// console.log(typeof "Hello World");
cardCounter(2);
cardCounter(3);
cardCounter(4);
console.log(cardCounter(5));
