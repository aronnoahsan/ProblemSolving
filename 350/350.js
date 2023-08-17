/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
*/

var intersect = function (nums1, nums2) {
  const length1 = nums1.length;
  const ans = [];
  for (let i = 0; i < length1; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const element = nums1[i];
      if (element == nums2[j]) {
        ans.push(element);
        nums2.splice(j, 1);
        break;
      }
    }
  }
  return ans;
};
