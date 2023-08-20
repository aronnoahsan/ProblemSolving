/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/
var mySqrt = function (x) {
  if (x < 0 || isNaN(x)) return NaN;
  let sqareRoot = x / 2;
  let temp = 0;
  while (sqareRoot != temp) {
    temp = sqareRoot;
    sqareRoot = (x / sqareRoot + sqareRoot) / 2;
  }
  // Math.floor is used, because leetcode wants answer less than or equal to a the calculated value.
  return Math.floor(sqareRoot);
};
