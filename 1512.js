/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/

var numIdenticalPairs = function (nums) {
  let goodPairs = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (nums[i] == nums[j] && i < j) {
        goodPairs = goodPairs + 1;
      }
    }
  }

  return goodPairs;
};
