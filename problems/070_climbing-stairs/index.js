/**
 * Problem: https://leetcode.com/problems/climbing-stairs/description/
 */
/**
 * @param {number} n
 * @return {number}
 */
let ways = [0,1,2];
const climbStairs = function(n) {
  if(ways[n]){
    return ways[n];
  }

  for(let i = 3; i <= n; ++i){
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n];
};
//60ms 99.70%
module.exports = climbStairs;
