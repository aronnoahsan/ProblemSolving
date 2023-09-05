/*
Given an integer num, return the number of digits in num that divide num.

An integer val divides nums if nums % val == 0.
*/

var countDigits = function (num) {
  let count = 0;
  const str = num.toString();
  const length = str.length;
  for (let i = 0; i < length; i++) {
    if (num % Number(str[i]) == 0) {
      count++;
    }
  }
  return count;
};
