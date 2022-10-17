const { NotImplementedError } = require("../extensions/index.js");

function getMatrixElementsSum(matrix) {
  // let answer = 0;
  // for (i = 0; i < matrix.length; i++) {
  //   for (y = 0; y < matrix[0].length; y++) {
  //     if (matrix[i][y] == 0 && i + 1 < matrix.length) {
  //       matrix[i + 1][y] = 0;
  //     }
  //     answer += matrix[i][y];
  //   }
  // }
  // return answer;
}

// getMatrixElementsSum([
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ]);

module.exports = {
  getMatrixElementsSum,
};
