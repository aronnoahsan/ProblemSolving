/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

var maxProfit = function (prices) {
  let maxProfit = 0;
  const length = prices.length;
  let buyIndex = 0;
  let sellIndex = 1;
  while (sellIndex < length) {
    const buyPrice = prices[buyIndex];
    const sellPrice = prices[sellIndex];
    if (sellPrice > buyPrice) {
      const profit = sellPrice - buyPrice;
      maxProfit = Math.max(maxProfit, profit);
    } else {
      buyIndex = sellIndex;
    }
    sellIndex++;
  }
  return maxProfit;

  //   Using for loop
  // for (let i=0; i<length; i++){
  //     for (let j=i+1; j<length; j++){
  //         const profit = prices[j]-prices[i];
  //         if(maxProfit<profit){
  //             maxProfit = profit;
  //         }
  //     }
  // }
  // return maxProfit;
};
