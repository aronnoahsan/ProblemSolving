/*
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
*/
var countKDifference = function (nums, k) {
  let sum = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const x = Math.abs(nums[i] - nums[j]) == k;
      if (x) {
        sum++;
      }
    }
  }
  return sum;
};
