/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/
var missingNumber = function (nums) {
  const length = nums.length;
  const numsSum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const sum = (length * (length + 1)) / 2;
  return sum - numsSum;
};
