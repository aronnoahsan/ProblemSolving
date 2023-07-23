/*
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/

var finalValueAfterOperations = function (operations) {
  let x = 0;
  const length = operations.length;
  for (let i = 0; i < length; i++) {
    const ops = operations[i];
    if (ops == "++X" || ops == "X++") {
      x = x + 1;
    }

    if (ops == "--X" || ops == "X--") {
      x = x - 1;
    }
  }

  return x;
};
