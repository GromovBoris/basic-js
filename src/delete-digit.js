const { NotImplementedError } = require("../extensions/index.js");

function deleteDigit(digit) {
  let str = digit.toString();
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    let num = parseInt(str.slice(0, i) + str.slice(i + 1));
    if (num > answer) {
      answer = num;
    }
  }
  // console.log(answer)
  return answer;
}

module.exports = {
  deleteDigit,
};
