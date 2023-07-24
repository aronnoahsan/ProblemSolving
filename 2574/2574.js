/*
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.
*/

var leftRightDifference = function (nums) {
  let answer = [];
  const length = nums.length;
  let leftSum = [];
  let rightSum = [];

  for (let i = 0; i < length; i++) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let j = 0; j < i; j++) {
      sumLeft = sumLeft + nums[j];
    }
    leftSum.push(sumLeft);
    const z = i + 1;
    for (let k = z; k < length; k++) {
      sumRight = sumRight + nums[k];
    }
    rightSum.push(sumRight);

    const sum = Math.abs(leftSum[i] - rightSum[i]);
    answer.push(sum);
  }
  return answer;
};
