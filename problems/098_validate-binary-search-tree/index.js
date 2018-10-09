/**
 * Problem: https://leetcode.com/problems/validate-binary-search-tree/description/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
  return isValid(root, null, null);
};
const isValid = function(root, min, max){
  if(!root) return true;
  if(min !== null && min >= root.val) return false;
  if(max !== null && max <= root.val) return false;
  return (isValid(root.left, min, root.val) && isValid(root.right, root.val, max));
};
//80ms 98.80%
module.exports = isValidBST;
