/**
 * Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let len = prices.length,
  profit = 0,
  dif = 0;
  for(let i = 0; i < len-1; ++i){
    // console.log(`prices[i]: ${prices[i]}`);
    if((dif = prices[i+1] - prices[i]) > 0){
        profit += dif;
        // console.log(`profit: ${profit}`);
    }
  }
  return profit;
}
//104ms %28.34
module.exports = maxProfit;