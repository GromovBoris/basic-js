const { NotImplementedError } = require("../extensions/index.js");

function getSumOfDigits(n) {
  n = n.toString().split("");
  let answer = 0;
  if (n.length != 1) {
    for (i = 0; i < n.length; i++) {
      answer += n[i] << 0;
    }
    return getSumOfDigits(answer);
  } else if (n.length == 1) {
    answer = Number(n.join(""));
    return answer;
  }
}

getSumOfDigits(123);

module.exports = {
  getSumOfDigits,
};
