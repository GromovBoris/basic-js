const { NotImplementedError } = require("../extensions/index.js");

function deleteDigit(digit) {
  let str = digit.toString();
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let num = parseInt(str.slice(0, i) + str.slice(i + 1));
    if (num > max) {
      max = num;
    }
  }
  return max;

  // let arrDigit = [...digit.toString()].map(Number);
  // console.log(arrDigit);
  // let finalArr = Array;
  // for (i = 0; i < arrDigit.length; i++) {
  //   finalArr.push(arrDigit.splice(arrDigit[i], 1));
  // }
  // console.log(finalArr);
  // let digitArr = Array.from(String(digit)).map((i) => Number(i));
  // let newStr = digit.toString();
  // digitArr = Array;
  // for (i = 0; i < newStr.length - 1; i++) {
  //   digitArr[i] = newStr.replace(newStr[i], "");
  //   console.log(newStr[i]);
  // }
  // let a = newStr.slice(0, -1);
  // finalArr = digitArr.push(a);
  // console.log(finalArr);
  // let newArr = Object.values(digitArr);
  // console.log(newArr);
  // let answer = newArr[0];
  // // console.log(answer);
  // for (i = 0; i < newArr.length; i++) {
  //   if (answer < newArr[i + 1]) {
  //     answer = newArr[i + 1];
  //   }
  // }
  // // console.log(answer);
  // return answer;
}
// deleteDigit(1001);

module.exports = {
  deleteDigit,
};
