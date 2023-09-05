/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].
*/

var selfDividingNumbers = function (left, right) {
  const ans = [];

  for (let i = left; i <= right; i++) {
    const str = i.toString();
    if (str.includes("0")) {
      continue;
    }
    const length = str.length;
    let count = 0;
    for (let j = 0; j < length; j++) {
      if (i % Number(str[j]) == 0) {
        count++;
      }
    }

    if (count == length) {
      ans.push(i);
    }
  }
  return ans;
};
