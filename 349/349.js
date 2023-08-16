/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
*/
var intersection = function (nums1, nums2) {
  const length1 = nums1.length;
  const length2 = nums2.length;
  const ansSet = new Set();
  if (length2 < length1) {
    const set1 = new Set(nums1);
    for (let i = 0; i < length2; i++) {
      const item = nums2[i];
      if (set1.has(item)) {
        ansSet.add(item);
      }
    }
  } else {
    const set2 = new Set(nums2);
    for (let i = 0; i < length1; i++) {
      const item = nums1[i];
      if (set2.has(item)) {
        ansSet.add(item);
      }
    }
  }

  return Array.from(ansSet);
};
