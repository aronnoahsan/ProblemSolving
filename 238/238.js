/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

var productExceptSelf = function (nums) {
  const length = nums.length;
  const answer = [];
  const sum = nums.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
  for (let i = 0; i < length; i++) {
    if (nums[i] == 0) {
      const nums0 = [...nums];
      nums0.splice(i, 1);
      const sum0 = nums0.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        1
      );
      answer.push(sum0);
    } else {
      answer.push(sum / nums[i]);
    }
  }
  return answer;
};
