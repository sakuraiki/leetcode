/**
 * Problem: https://leetcode.com/problems/merge-sorted-array/description/
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  let idx = n + m - 1;
  n -= 1;
  m -= 1;

  while(n >= 0 && m >=0){
    if(nums1[m] > nums2[n]){
      nums1[idx--] = nums1[m--];
    }else{
      nums1[idx--] = nums2[n--];
    }
  }

  while(n >= 0){
    nums1[idx--] = nums2[n--];
  }

  while(m >= 0){
    nums1[idx--] = nums1[m--];
  }
};
//76ms 75.94%
module.exports = merge;
