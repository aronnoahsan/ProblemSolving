/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.
*/
var isPalindrome = function (x) {
  const str = x.toString();
  const arr = str.split("");
  const reversed = arr.reverse().join("");
  if (str == reversed) {
    return true;
  } else {
    return false;
  }
};
