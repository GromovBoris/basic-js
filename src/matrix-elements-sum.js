const { NotImplementedError } = require("../extensions/index.js");

function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (i = 0; i < matrix.length; i++) {
    for (y = 0; y < matrix[i].length; y++) {
      if (matrix[i][y] == 0 && i + 1 < matrix.length) {
        matrix[i + 1][y] = 0;
      }
      sum += matrix[i][y];
    }
  }
  return sum;
  // return counter;
}

module.exports = {
  getMatrixElementsSum,
};
