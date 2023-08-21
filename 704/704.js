/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/
var search = function (nums, target) {
  let start = 0;
  let length = nums.length;
  let end = length;
  let mid = Math.floor(end / 2);
  while (start < end) {
    const element = nums[mid];
    if (element == target) {
      return mid;
    } else if (element < target) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else {
      end = mid;
      mid = Math.floor((start + end) / 2);
    }
  }
  return -1;
};
