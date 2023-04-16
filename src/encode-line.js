const { NotImplementedError } = require("../extensions/index.js");

function encodeLine(str) {
  let arr = str.split("");
  if (arr.length === 0) {
    return "";
  }

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1, 1);
      if (typeof arr[i - 1] === Number) {
        arr[i - 1] += 1;
      }
    }
  }

  for (j = 0; j < arr.length; j++) {
    if (typeof arr[j] === "number") {
      if (typeof arr[j + 1] === "number") {
        arr.splice(j + 1, 1, arr[j] + 1);
        // arr[j + 1] += 1;
        arr.slice(j, 1);
        // j++;
      } else {
        arr[j] += 1;
      }
      // console.log(arr);

      // j--;
    }
  }

  // console.log(arr);

  let answer = "";
  for (let k = 0; k < arr.length; k++) {
    if (typeof arr[k] === "string") {
      answer = answer + arr[k];
    }
    if (typeof arr[k] === "number" && typeof arr[k + 1] === "string") {
      answer = answer + arr[k] + arr[k + 1];
      k++;
    }
  }
  // console.log(answer);
  return answer;
}
// encodeLine("");

module.exports = {
  encodeLine,
};
