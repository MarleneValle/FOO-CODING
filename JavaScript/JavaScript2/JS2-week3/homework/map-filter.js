'use strict';

// function doubleOddNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   return newNumbers;
// }

// const myNumbers = [1, 2, 3, 4];
// console.log(doubleOddNumbers(myNumbers));

//Rewrite the above function using map and filter (with =>)

function doubleOddNumbers(numbers) {
  return numbers
    .filter(number => number % 2 !== 0)
    .map(number => number * 2);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// // Do not change or remove anything below this line
// module.exports = {
//   myNumbers,
//   doubleOddNumbers,
// };
