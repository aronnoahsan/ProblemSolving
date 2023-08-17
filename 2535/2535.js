/*
You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.
*/

var differenceOfSum = function (nums) {
  const elementSum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const digits = [];
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const n = String(nums[i]).split("");
    const d = n.map(Number);
    digits.push(d);
  }
  const d = digits.flat();
  const digitSum = d.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return elementSum - digitSum;
};
