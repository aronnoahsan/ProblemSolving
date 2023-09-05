/*
A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.
*/
var kthDistinct = function (arr, k) {
  const length = arr.length;
  const ans = [];
  for (let i = 0; i < length; i++) {
    let count = 0;
    const item = arr[i];
    for (let j = 0; j < length; j++) {
      if (item == arr[j]) {
        count++;
      }
    }
    if (count == 1) {
      ans.push(item);
    }
  }
  if (ans.length >= k) {
    return ans[k - 1];
  } else {
    return "";
  }
};
