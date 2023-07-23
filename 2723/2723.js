/*
Given two promises promise1 and promise2, return a new promise.
promise1 and promise2 will both resolve with a number.
The returned promise should resolve with the sum of the two numbers.
*/

var addTwoPromises = async function (promise1, promise2) {
  const sum = (await promise1) + (await promise2);
  return sum;
};
