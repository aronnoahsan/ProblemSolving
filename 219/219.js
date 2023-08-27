/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/
var containsNearbyDuplicate = function (nums, k) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};
