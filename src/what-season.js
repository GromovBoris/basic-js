const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }
  if (date.hasOwnProperty("toString")) {
    throw new Error("Invalid date!");
  }

  let season;
  let month = date.getMonth();
  if (month < 2 || month == 11) {
    season = "winter";
  } else if (month > 1 && month < 5) {
    season = "spring";
  } else if (month > 4 && month < 8) {
    season = "summer";
  } else if (month > 7 && month < 11) {
    season = "autumn";
  }

  return season;
}
module.exports = {
  getSeason,
};
