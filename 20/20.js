/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/
var isValid = function (s) {
  const arr = s.split("");
  const length = arr.length;
  let isValid = false;
  if (length % 2 !== 0) {
    return isValid;
  }
  let stack = [];
  const map = new Map();
  map.set(")", "(");
  map.set("}", "{");
  map.set("]", "[");

  for (let i = 0; i < length; i++) {
    const element = arr[i];
    if (element == "(" || element == "{" || element == "[") {
      stack.unshift(arr[i]);
    } else if (stack[0] == map.get(arr[i])) {
      isValid = true;
      stack.shift();
    } else {
      return false;
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return isValid;
};
