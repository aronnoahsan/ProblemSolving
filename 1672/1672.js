/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/
var maximumWealth = function (accounts) {
  const length = accounts.length;
  let highestWealth = 0;
  for (let i = 0; i < length; i++) {
    const jArr = accounts[i];
    const jLength = jArr.length;
    let jSum = 0;
    for (let j = 0; j < jLength; j++) {
      jSum = jSum + jArr[j];
    }
    if (highestWealth < jSum) {
      highestWealth = jSum;
    }
  }
  return highestWealth;
};
