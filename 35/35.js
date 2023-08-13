/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
*/
var searchInsert = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  // Finding if it exists in the array;
  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    const middleNumber = nums[middleIndex];
    if (middleNumber == target) {
      return middleIndex;
    } else if (middleNumber < target) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  // When target number is not inside the array (index where it would be if it were inserted in order)
  return startIndex;
};
