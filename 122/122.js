/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
*/

var maxProfit = function (prices) {
  const length = prices.length;
  let buyIndex = 0;
  let sellIndex = 1;
  let maxProfit = 0;
  while (sellIndex < length) {
    const buyPrice = prices[buyIndex];
    const sellPrice = prices[sellIndex];
    if (sellPrice > buyPrice) {
      const profit = sellPrice - buyPrice;
      maxProfit = maxProfit + profit;
      buyIndex++;
    } else {
      buyIndex = sellIndex;
    }
    sellIndex++;
  }
  return maxProfit;
};
