/*
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.
*/
var areAlmostEqual = function (s1, s2) {
  const length = s1.length;
  if (s1 == s2) {
    return true;
  } else if (length !== s2.length) {
    return false;
  }

  const newMap = new Map();

  for (let i = 0; i < length; i++) {
    const s1i = s1[i];
    if (s1i !== s2[i]) {
      if (newMap.has(s1i)) {
        return false;
      } else {
        newMap.set(s1i, s2[i]);
      }
    }
    if (newMap.size > 2) {
      return false;
    }
  }
  for (let i = 0; i < length; i++) {
    const s1i = s1[i];
    const x = newMap.get(s1i);
    if (newMap.get(x) == s1i) {
      return true;
    }
  }
  return false;
};
