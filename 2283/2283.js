/*
You are given a 0-indexed string num of length n consisting of digits.

Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.
*/

var digitCount = function (num) {
  const length = num.length;
  for (let i = 0; i < length; i++) {
    let count = 0;
    for (let j = 0; j < length; j++) {
      if (String(i) == num[j]) {
        count++;
      }
    }
    if (String(count) !== num[i]) {
      return false;
    }
  }
  return true;
};
