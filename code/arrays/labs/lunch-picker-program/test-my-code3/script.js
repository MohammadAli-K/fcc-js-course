let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

function getRandomColor(array) {
  const getRandomCol = array[Math.floor(Math.random() * array.length)];
  const arrayIndex = array.indexOf(getRandomCol);
  return 'Random color: ' + getRandomCol + ' ' + 'Index: ' + arrayIndex;
}

console.log(getRandomColor(colors));
