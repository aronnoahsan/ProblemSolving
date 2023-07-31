/*
A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.
*/
var minPartitions = function (n) {
  const numArr = String(n).split("").map(Number);
  const sortedArr = numArr.sort((a, b) => {
    return b - a;
  });
  return sortedArr[0];
};
