/*
Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
*/
var countPairs = function (nums, target) {
  const length = nums.length;
  let numberOfPairs = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] < target) {
        numberOfPairs++;
      }
    }
  }
  return numberOfPairs;
};
