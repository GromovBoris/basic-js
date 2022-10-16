const { NotImplementedError } = require("../extensions/index.js");

function countCats(matrix) {
  let counter = 0;
  for (i = 0; i < matrix.length; i++) {
    for (y = 0; y < matrix[i].length; y++) {
      // console.log(matrix[i][y]);
      if (matrix[i][y] === "^^") {
        counter++;
      }
    }
  }
  return counter;
}

module.exports = {
  countCats,
};
