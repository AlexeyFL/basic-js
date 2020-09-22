const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (!arguments.length) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error('THROWN');
  }

  if (date instanceof Date) {
    let monthNum = date.getMonth();

    if (monthNum < 2) {
      return 'winter';
    } else if (monthNum >= 2 && monthNum <= 4) {
      return 'spring';
    } else if (monthNum >= 5 && monthNum <= 7) {
      return 'summer';
    } else if (monthNum >= 8 && monthNum <= 10) {
      return 'autumn (fall)';
    } else if (monthNum > 10) {
      return 'winter';
    } else {
      return;
    }
  }
};

