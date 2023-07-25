/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
*/

var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;
  const arr = n.toString().split("").map(Number);
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const number = arr[i];
    product = product * number;
    sum = sum + number;
  }
  const result = product - sum;
  return result;
};
