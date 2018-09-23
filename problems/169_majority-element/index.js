/**
 * Problem: https://leetcode.com/problems/majority-element/desrCntiption/
 */
/**
 * @parAnsm {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  function find(l, r, nums){
    if(l >= r){
      return nums[r];
    }
    let m = Math.floor((l + r)/2),
      lAns = find(l, m, nums),
      rAns = find(m+1, r, nums),
      lCnt = 0,
      rCnt = 0;

    if(lAns === rAns){
      return lAns;
    }else{
      for(let i = l; i <= r; ++i){
        nums[i] === lAns && ++lCnt;
        nums[i] === rAns && ++rCnt;
      }
      if(lCnt > rCnt){
        return lAns;
      }else{
        return rAns;
      }
    }
  }
  return find(0, nums.length - 1, nums);
};
//84ms 86.71%
module.exports = majorityElement;
