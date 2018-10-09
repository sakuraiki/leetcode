const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([2, 1, 3])],
  output : true
}, {
  input  : [buildTree([1, 2, 3])],
  output : false
}, {
  input  : [buildTree([5,1,6,null,null,3,7])],
  output : false
}];
