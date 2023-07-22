/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
*/
var getConcatenation = function (nums) {
  const ans = [];
  for (let i = 0; i < 2; i++) {
    ans.push(...nums);
  }
  return ans;
};
