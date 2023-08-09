/*
You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
*/
var maximum69Number = function (num) {
  const str = num.toString();
  const arr = str.split("");
  let changed = [num];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const arr2 = [...arr];
    const int = Number(arr[i]);
    if (int == 6) {
      arr2.splice(i, 1, 9).join("");
      changed.push(Number(arr2.join("")));
    } else {
      arr2.splice(i, 1, 6).join("");
      changed.push(Number(arr2.join("")));
    }
  }
  return changed.sort().pop();
};
