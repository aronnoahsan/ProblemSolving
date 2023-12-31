/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
*/
var map = function (arr, fn) {
  let arr2 = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    arr2.push(fn(arr[i], i));
  }
  return arr2;
};
