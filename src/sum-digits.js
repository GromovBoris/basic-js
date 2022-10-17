const { NotImplementedError } = require("../extensions/index.js");

function getSumOfDigits(n) {
  let nArr = n.toString().split("").map(Number);
  let sum = 0;
  for (i = 0; i < nArr.length; i++) {
    sum += nArr[i];
  }
  answer = sum;
  if (answer <= 9) {
    console.log(answer);
  } else {
    return answer;
  }
}
// getSumOfDigits(123);

module.exports = {
  getSumOfDigits,
};
