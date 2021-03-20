'use strict';

//Foor loop
function repeatStringNumTimesFor(str, num) {
  let result = '';

  for (let i = 0; i < num; i++) {
    result += `${str}`;
  }

  return result;
}

console.log(repeatStringNumTimesFor('abc', 3));



// While loop
function repeatStringNumTimesWhile(string, times) {
  let repeatedString = '';
  while (times > 0) {
    repeatedString += string;
    times--;  
  }
  return repeatedString;
}

console.log(repeatStringNumTimesWhile('abc', 3));




// Do while loop
function repeatStringNumTimesDoWhile(str, num) {
  let result = '';
  let i = 0;

    do {
      i++;
      result += `${str}`;
    } while (i < num);
  

  return result;
}

console.log(repeatStringNumTimesDoWhile('abc', 3));


// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};