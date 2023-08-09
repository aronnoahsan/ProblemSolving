/*
Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.

You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.

Return the final string that will be present on your laptop screen.
*/
var finalString = function (s) {
  const arr = s.split("");
  const length = arr.length;
  const output = [];
  for (let i = 0; i < length; i++) {
    if (arr[i] == "i") {
      output.reverse();
    } else {
      output.push(arr[i]);
    }
  }

  return output.join("");
};
