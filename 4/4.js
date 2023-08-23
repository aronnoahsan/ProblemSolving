/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

var findMedianSortedArrays = function (nums1, nums2) {
  const nums = [...nums1, ...nums2];
  const sorted = nums.sort((a, b) => a - b);
  const length = nums.length;
  if (length % 2 == 0) {
    const midEnd = length / 2;
    const midStart = midEnd - 1;
    return (sorted[midEnd] + sorted[midStart]) / 2;
  } else {
    const mid = Math.floor(length / 2);
    return sorted[mid];
  }
};
