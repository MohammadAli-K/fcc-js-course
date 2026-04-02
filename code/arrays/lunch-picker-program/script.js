const lunches = [];

function addLunchToEnd(array, string) {
  array.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, string) {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array, string) {
  if (array.pop()) {
    console.log(`${string} removed from the end of the lunch menu.`);
  } else {
    console.log('No lunches to remove.');
  }
  return array;
}

console.log(addLunchToEnd(lunches, 'Apple'));
console.log(addLunchToEnd(lunches, 'Strawberry'));
console.log(addLunchToEnd(lunches, 'Bananas'));
console.log(addLunchToEnd(lunches, 'Water Melone'));
console.log(addLunchToStart(lunches, 'Peach'));
console.log(removeLastLunch(lunches));
