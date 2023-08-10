/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/
var rotate = function (nums, k) {
  return nums.unshift(...nums.splice(-k % nums.length));
};

// using for loop will result in "Time limit exceeded error"
// when k is larger than length of nums (k>nums.length), it only moves the modulus ammount of data.
// when k>length; k % length = modulus (or remainder).
// when k<length; k % length = k.
