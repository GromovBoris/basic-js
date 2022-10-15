const { NotImplementedError } = require("../extensions/index.js");

function countCats(matrix) {
  let counter = 0;
  for (i = 0; i < matrix.length; i++) {
    for (y = 0; y < matrix[i].length; y++) {
      // console.log(matrix[y][i]);
      if (matrix[y][i] == "^^") {
        counter++;
      }
    }
  }
  return counter;
}
