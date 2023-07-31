/*
You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:
pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
Note that ^ denotes the bitwise-xor operation.
It can be proven that the answer is unique.
*/
var findArray = function (pref) {
  const length = pref.length - 1;
  let arr = [pref[0]];
  for (let i = 0; i < length; i++) {
    arr.push(pref[i] ^ pref[i + 1]);
  }
  return arr;
};
