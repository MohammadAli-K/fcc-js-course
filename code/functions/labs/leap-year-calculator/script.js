function isLeapYear(years) {
  if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
    return `${years} is a leap year.`;
  } else {
    return `${years} is not a leap year.`;
  }
}

let year = 2010;

let result = isLeapYear(year);

console.log(result);

// Zo kan het ook

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return `${year} is a leap year.`;
//   } else {
//     return `${year} is not a leap year.`;
//   }
// }

// let result = isLeapYear(2030);

// console.log(result);

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return `${year} is a leap year.`;
//   } else {
//     return `${year} is not a leap year.`;
//   }
// }

// console.log(isLeapYear(2050));
