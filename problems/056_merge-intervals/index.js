/**
 * Problem: https://leetcode.com/problems/merge-intervals/description/
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}

const merge = function(intervals) {
  let len = intervals.length;
  if(len < 2){
    return intervals;
  }

  intervals = intervals.sort(function(a, b){
    return a.start - b.start;
  });

  let ret = [],
    head = intervals[0].start,
    tail = intervals[0].end;

  for(let i = 1; i < len; ++i){
    if(intervals[i].start > tail){
      ret.push(new Interval(head, tail));
      head = intervals[i].start;
    }
    tail = intervals[i].end > tail? intervals[i].end: tail;
  }

  if(ret.length === 0 || ret[ret.length - 1].end !== tail){
    ret.push(new Interval(head, tail));
  }

  return ret;
};
//120ms 58.59%
module.exports = merge;
