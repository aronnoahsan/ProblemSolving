/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.
*/
var guessNumber = function (n) {
  if (n == 1) {
    return n;
  }
  let start = 1;
  let end = n;
  let mid = n / 2;
  while (start < end) {
    const guessMid = guess(mid);
    if (guessMid == 0) {
      return Math.floor(mid);
    } else if (guessMid == 1) {
      start = mid + 1;
      mid = (start + end) / 2;
    } else {
      end = mid;
      mid = (start + end) / 2;
    }
  }
  return Math.floor(start);
};
