/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

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
var titleToNumber = function (columnTitle) {
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
  const arr = columnTitle.split("");
  const length = arr.length;
  let columnNumber = 0;
  for (let i = 0; i < length; i++) {
    const num = letters.indexOf(arr[i]) + 1;
    columnNumber = columnNumber * 26 + num;
  }
  return columnNumber;
};
