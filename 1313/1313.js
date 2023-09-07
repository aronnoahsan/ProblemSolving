/*
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.
*/

var decompressRLElist = function (nums) {
  const target = [];
  const length = nums.length;
  let i = 0;
  while (i < length) {
    const frequency = nums[i];
    const value = nums[i + 1];
    let j = 1;
    while (j <= frequency) {
      target.push(value);
      j++;
    }
    i = i + 2;
  }
  return target;
};
