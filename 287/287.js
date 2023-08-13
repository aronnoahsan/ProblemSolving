/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
*/
var findDuplicate = function (nums) {
  const length = nums.length;
  const mySet = new Set();
  for (let i = 0; i < length; i++) {
    const value = nums[i];
    if (mySet.has(value)) {
      return value;
    } else {
      mySet.add(value);
    }
  }
};
