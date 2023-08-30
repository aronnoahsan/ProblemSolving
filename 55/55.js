/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

var canJump = function (nums) {
  let length = nums.length;
  const targetIndex = length - 1;
  let maxDistance = 0;
  let i = 0;
  while (i < length) {
    maxDistance = Math.max(maxDistance, i + nums[i]);

    if (maxDistance >= targetIndex) {
      return true;
    } else if (maxDistance <= i && nums[i] == 0) {
      return false;
    }

    i++;
  }
  return false;
};
