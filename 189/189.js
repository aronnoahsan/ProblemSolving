/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/
var rotate = function (nums, k) {
  let length = nums.length;
  for (let i = length; i > k; i--) {
    const item = nums.shift();
    nums.push(item);
  }
  return nums;
};

// ⚠⚠⚠ It's not working on all cases. Should be changed
