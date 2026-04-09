let lunches = ['Apple', 'Grape', 'Pear'];

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

function removeLastLunch(array = []) {
  // let removeElement = array.pop();
  if (Array.isArray(array)) {
    let removeElement = array.pop();
    console.log(`${removeElement} removed from the end of the lunch menu.`);
  } else {
    console.log('No lunches to remove.');
  }
  return array;
}

console.log(lunches);
console.log(addLunchToEnd(lunches, 'Peach'));
console.log(addLunchToStart(lunches, 'Kiwi'));
addLunchToEnd(lunches, 'Watermelone');
addLunchToStart(lunches, 'Blueberry');
console.log(lunches);
console.log(removeLastLunch(lunches));
removeLastLunch(lunches);
console.log(lunches);
console.log(removeLastLunch());
removeLastLunch();
console.log(addLunchToEnd(lunches, 'Peach'));
console.log(addLunchToEnd(lunches, 'Strawberry'));
console.log(addLunchToStart(lunches, 'Kiwi'));
console.log(addLunchToStart(lunches, 'Blueberry'));
console.log(removeLastLunch(lunches));
console.log(removeLastLunch(lunches));
console.log(removeLastLunch(lunches));
removeLastLunch();
removeLastLunch();
console.log(addLunchToEnd(lunches, 'Tacos'));
console.log(addLunchToEnd(['Pizza', 'Burger'], 'Sushi'));
console.log(removeLastLunch());

// console.log(Math.random());
