/*
You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
Return the shuffled string.
*/
var restoreString = function (s, indices) {
  const sArr = s.split("");
  const length = sArr.length;
  const shuffledArr = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i == indices[j]) {
        shuffledArr.push(sArr[j]);
      }
    }
  }
  const shuffledString = shuffledArr.join("");
  return shuffledString;
};
