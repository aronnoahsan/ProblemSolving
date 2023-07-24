/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
*/
function binaryExponentiation(x, n) {
  if (n === 0) {
    // We know x^0=1
    return 1;
  }
  if (n < 0) {
    // When n is negative, x^n = 1/(x^-n)
    // We need `-n` so we deed `-1*n`
    return 1 / binaryExponentiation(x, -1 * n);
  }

  if (n % 2 === 0) {
    // When `n` is even
    return binaryExponentiation(x * x, n / 2);
  } else {
    // When `n` is odd, we take 1 `x` outside so `(n-1)` becomes even
    return x * binaryExponentiation(x * x, (n - 1) / 2);
  }
}
var myPow = function (x, n) {
  // Using libraray function is effecient
  // return Math.pow(x, n);
  return binaryExponentiation(x, n);
};
