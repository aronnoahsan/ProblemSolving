/*
Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

Return an integer denoting the sum of all numbers in the given range satisfying the constraint.
*/
var sumOfMultiples = function (n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    const threeDivisible = i % 3 === 0;
    const fiveDivisible = i % 5 === 0;
    const sevenDivisible = i % 7 === 0;
    if (threeDivisible || fiveDivisible || sevenDivisible) {
      sum = sum + i;
    }
  }
  return sum;
};
