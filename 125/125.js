/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/
var isPalindrome = function (s) {
  const original = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const arr = original.split("");
  const reverse = arr.reverse().join("");
  if (original == reverse) {
    return true;
  } else {
    return false;
  }
};
