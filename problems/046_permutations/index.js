/**
 * Problem: https://leetcode.com/problems/permutations/description/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  function dfs(rets, ret, nums, used){
    if(ret.length === nums.length){
      rets.push([...ret]);
      return rets;
    }

    for(let i = 0, len = nums.length; i < len; ++i){
      if(!used[i]){
        used[i] = true;
        ret.push(nums[i]);
        dfs(rets, ret, nums, used);
        ret.pop();
        used[i] = false;
      }
    }
    return rets;
  }

  return dfs([], [], nums, []);
};
//88ms 90.34%
module.exports = permute;