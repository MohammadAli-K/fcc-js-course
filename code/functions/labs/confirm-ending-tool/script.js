function confirmEnding(str, ending) {
  return str
    .split('')
    .filter((_, i) => i >= str.length - ending.length)
    .join('') == ending
    ? true
    : false;
}

console.log(confirmEnding('longword', 'word'));
