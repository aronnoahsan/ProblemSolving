/*
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
*/
var kidsWithCandies = function (candies, extraCandies) {
  let boolArr = [];
  const length = candies.length;
  let largest = 0;
  for (let i = 0; i < length; i++) {
    const currentCandies = candies[i];
    if (currentCandies > largest) {
      largest = currentCandies;
    }
  }

  for (let i = 0; i < length; i++) {
    const totalcandies = candies[i] + extraCandies;
    if (totalcandies >= largest) {
      boolArr.push(true);
    } else {
      boolArr.push(false);
    }
  }
  return boolArr;
};
