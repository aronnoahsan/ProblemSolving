/*
Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
*/
var checkIfExist = function (arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const element = arr[i] * 2;
    for (let j = 0; j < length; j++) {
      if (element == arr[j] && i !== j) {
        return true;
      }
    }
  }
  return false;
};
