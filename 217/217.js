/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  const size = set.size;
  const length = nums.length;
  if (size == length) {
    return false;
  } else {
    return true;
  }
};
