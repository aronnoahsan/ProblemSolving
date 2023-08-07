/*
You are given an array nums consisting of positive integers.

You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.

Return the number of distinct integers in the final array.
*/
var countDistinctIntegers = function (nums) {
  const reversedNum = (num) =>
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
  const length = nums.length;
  let reversedNums = [];
  for (let i = 0; i < length; i++) {
    reversedNums.push(reversedNum(nums[i]));
  }

  nums.push(...reversedNums);

  const newSet = new Set();
  const newLength = nums.length;
  for (let i = 0; i < newLength; i++) {
    const item = nums[i];
    if (!newSet.has(item)) {
      newSet.add(item);
    }
  }

  return newSet.size;
};
