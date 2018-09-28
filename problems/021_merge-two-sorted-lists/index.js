/**
 * Problem: https://leetcode.com/problems/merge-two-sorted-lists/description/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const { ListNode } = require('../../scripts/problem-utils');

const mergeTwoLists = function (l1, l2) {
  let p1 = l1,
    p2 = l2,
    head = new ListNode(null),
    cur = head;

  while(p1 && p2){
    if(p1.val < p2.val){
      cur.next = p1;
      cur = p1;
      p1 = p1.next;
    } else {
      cur.next = p2;
      cur = p2;
      p2 = p2.next;
    }
  }

  if(p1){
    cur.next = p1;
  }
  if(p2){
    cur.next = p2;
  }
  return head.next;
};
//80ms 96.92%
module.exports = mergeTwoLists;
