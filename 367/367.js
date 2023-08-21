/*
Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.
*/
var isPerfectSquare = function (num) {
  let start = 1;
  let end = num;
  let mid = Math.floor(num / 2);
  if (num == 1) {
    return true;
  }

  while (start < end) {
    const midSquare = mid * mid;
    if (midSquare == num) {
      return true;
    } else if (midSquare < num) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else {
      end = mid;
      mid = Math.floor((start + end) / 2);
    }
  }
  return false;
};
