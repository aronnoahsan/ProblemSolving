/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

var numJewelsInStones = function (jewels, stones) {
  let jewelsNumber = 0;
  const jewelsArr = jewels.split("");
  const stonesArr = stones.split("");
  const jewelsArrLength = jewelsArr.length;
  const stonesArrLength = stonesArr.length;
  for (let i = 0; i < jewelsArrLength; i++) {
    for (let j = 0; j < stonesArrLength; j++) {
      if (jewelsArr[i] == stonesArr[j]) {
        jewelsNumber = jewelsNumber + 1;
      }
    }
  }

  return jewelsNumber;
};
