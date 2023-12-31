/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.
*/
var lengthOfLastWord = function (s) {
  const newS = s.trim();
  const arr = newS.split(" ");
  const last = arr.pop();
  return last.split("").length;
};
