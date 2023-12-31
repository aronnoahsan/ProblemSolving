/*
Given an integer num, return the number of steps to reduce it to zero.
In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

var numberOfSteps = function (num) {
  let steps = 0;
  while (num !== 0) {
    const isEven = num % 2 === 0;
    if (isEven) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    steps++;
  }
  return steps;
};
