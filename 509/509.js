/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
*/
var fib = function (n) {
  let a = 0;
  let b = 1;
  let sum = 0;
  const arr = [];
  for (let i = 0; i <= n; i++) {
    sum = a + b;
    arr.push(a);
    a = b;
    b = sum;
  }
  return arr.pop();
};
