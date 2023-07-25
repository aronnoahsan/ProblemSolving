/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.
*/
var smallerNumbersThanCurrent = function (nums) {
  const length = nums.length;
  let smallerArray = [];
  for (let i = 0; i < length; i++) {
    let smallerNumbers = 0;
    for (let j = 0; j < length; j++) {
      if (nums[i] > nums[j]) {
        smallerNumbers = smallerNumbers + 1;
      }
    }
    smallerArray.push(smallerNumbers);
  }
  return smallerArray;
};
