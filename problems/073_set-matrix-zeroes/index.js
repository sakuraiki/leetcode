/**
 * Problem: https://leetcode.com/problems/set-matrix-zeroes/description/
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  let m = matrix.length, n,
    line1 = false, col1 = false;
  if(m === 0){
    return;
  }else{
    n = matrix[0].length;
  }

  for(let i = 0; i < m; ++i) {
    if (!matrix[i][0]) {
      col1 = true;
    }
  }
  for(let i = 0; i < n; ++i) {
    if(!matrix[0][i]){
      line1 = true;
    }
  }

  for(let l = 1; l < m; ++l){
    for(let c = 1; c < n; ++c){
      if(!matrix[l][c]){
        matrix[l][0] = matrix[0][c] = 0;
      }
    }
  }

  for(let l = 1; l < m; ++l){
    for(let c = 1; c < n; ++c){
      if(!matrix[l][0] || !matrix[0][c]){
        matrix[l][c] = 0;
      }
    }
  }

  if(col1) {
    for (let i = 0; i < m; ++i) {
      matrix[i][0] = 0;
    }
  }
  if(line1){
    for (let i = 0; i < n; ++i) {
      matrix[0][i] = 0;
    }
  }

  return;
};
//140ms 40.72%
module.exports = setZeroes;
