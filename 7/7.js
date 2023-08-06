/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/
var reverse = function (x) {
  const sign = Math.sign(x);
  const str = x.toString();
  const arr = str.split("");
  const length = arr.length - 1;
  const reversed = [];
  for (let i = length; i >= 0; i--) {
    if (arr[i] !== "-") {
      reversed.push(arr[i]);
    }
  }
  const numberStr = reversed.join("");
  const number = Number(numberStr);
  if (number >= 2147483647) {
    return 0;
  }
  if (sign == -1) {
    return number * -1;
  } else {
    return number * 1;
  }
};
