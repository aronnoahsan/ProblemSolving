/*
There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

You must decrease the overall operation steps as much as possible.
*/

// Linear Search has O(n) time complexity
var search = function (nums, target) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] == target) {
      return true;
    }
  }
  return false;
};

// Alternate Solution
// Using binary search.
const nums = [4, 5, 6, 6, 7, 0, 1, 2, 4, 4];

// Find rotation point
const rotationPoint = (nums) => {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (startIndex < endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (nums[middleIndex] > nums[endIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex;
    }
  }
  return startIndex;
};

nums.unshift(...nums.splice(rotationPoint(nums)));
const sortedArray = [...nums];

console.log(sortedArray);
// Binary in sorted array for key
const binarySearch = (nums, key) => {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (nums[middleIndex] == key) {
      return true;
    } else if (nums[middleIndex] < key) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return false;
};

console.log(binarySearch(sortedArray, 0));
console.log(binarySearch(sortedArray, 3));
