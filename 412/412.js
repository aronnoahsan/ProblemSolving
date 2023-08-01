/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/
var fizzBuzz = function (n) {
  let answer = [];
  const length = n + 1;
  for (let i = 1; i < length; i++) {
    const threeDivisible = i % 3 === 0;
    const fiveDivisible = i % 5 === 0;
    if (threeDivisible & fiveDivisible) {
      answer.push("FizzBuzz");
    } else if (threeDivisible) {
      answer.push("Fizz");
    } else if (fiveDivisible) {
      answer.push("Buzz");
    } else {
      answer.push(String(i));
    }
  }
  return answer;
};
