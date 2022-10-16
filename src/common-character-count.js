const { NotImplementedError } = require("../extensions/index.js");

function getCommonCharacterCount(strFirst, strSecond) {
  let counter = 0;
  let strFirstArr = strFirst.split("");
  let strSecondArr = strSecond.split("");

  // for (i = 0; i < strFirstArr.lenght; i++) {
  //   if (strSecondArr.includes(e)) {
  //     counter++;
  //     strSecondArr.splice(strSecondArr.indexOf(e), 1);
  //   }
  // }

  strFirstArr.forEach((elem) => {
    if (strSecondArr.includes(elem)) {
      counter++;
      strSecondArr.splice(strSecondArr.indexOf(elem), 1);
    }
  });

  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
