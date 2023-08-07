/*
Given a non-negative integer num, return true if num can be expressed as the sum of any non-negative integer and its reverse, or false otherwise.
*/
var sumOfNumberAndReverse = function (num) {
  function reversedNum(num) {
    return (
      parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
    );
  }
  let result = false;
  for (let i = num; i >= 0; i--) {
    if (i + reversedNum(i) == num) {
      result = true;
    }
  }
  return result;
};
