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

function removeLastLunch(array) {
  let removeElement = array.pop();
  if (removeElement) {
    console.log(`${removeElement} removed from the end of the lunch menu.`);
  } else if (!array) {
    console.log('No lunches to remove.');
  }
  return array;
}

// function removeFirstLunch(array) {
//   let removeFirstElement = array.shift();
//   if (removeFirstElement) {
//     console.log(
//       `${removeFirstElement} removed from the start of the lunch menu.`,
//     );
//   } else {
//     console.log('No lunches to remove.');
//   }
//   return array;
// }

console.log(lunches);
console.log(addLunchToEnd(lunches, 'Peach'));
console.log(addLunchToEnd(lunches, 'Strawberry'));
console.log(addLunchToStart(lunches, 'Kiwi'));
console.log(addLunchToStart(lunches, 'Blueberry'));
console.log(removeLastLunch(lunches));
console.log(removeLastLunch(lunches));
console.log(lunches);
console.log(removeLastLunch());
// console.log(removeFirstLunch());
