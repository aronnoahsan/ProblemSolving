/*
A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.
*/

var checkPerfectNumber = function (num) {
  let countSum = 0;
  const x = num / 2;
  for (let i = 1; i <= x; i++) {
    if (num % i == 0) {
      countSum = countSum + i;
    }
  }
  if (countSum == num) {
    return true;
  } else {
    return false;
  }
};
