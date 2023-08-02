/*
You are given an integer n and an integer start.

Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.
*/
var xorOperation = function (n, start) {
  const nums = [];
  // nums er value n sonkhok
  for (let i = 0; nums.length < n; i++) {
    const value = start + 2 * i;
    nums.push(value);
  }
  let value = nums[0];
  for (let i = 0; i < n; i++) {
    value = value ^ nums[i + 1];
  }
  return value;
};
