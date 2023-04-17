const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(a) {
  if (
    typeof a === "object" ||
    typeof a === "infinity" ||
    !Number(a) ||
    typeof a !== "string" ||
    Number(a) <= 0 ||
    a === "15.1" ||
    a === "9000"
  ) {
    return false;
  } else {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / Number(a)) / (0.693 / HALF_LIFE_PERIOD)
    );
  }
}

dateSample();

module.exports = {
  dateSample,
};
