/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
*/

var convertToTitle = function (columnNumber) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const ans = [];
  while (columnNumber > 0) {
    columnNumber = columnNumber - 1;
    const charIndex = Math.floor(columnNumber % 26);
    columnNumber = Math.floor(columnNumber / 26);
    ans.push(letters[charIndex]);
  }
  return ans.reverse().join("");
};
