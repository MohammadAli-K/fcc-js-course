function truncateString(str, limit) {
  if (str.length > limit) {
    return str.slice(0, limit) + '...';
  } else {
    return str;
  }
}

console.log(truncateString('Hello, world!', 5));
