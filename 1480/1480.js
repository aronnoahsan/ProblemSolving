/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

var runningSum = function (nums) {
  let runSum = [];
  let sum = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    sum = nums[i];
    for (let j = 0; j < i; j++) {
      sum = sum + nums[j];
    }
    runSum.push(sum);
  }
  return runSum;
};
