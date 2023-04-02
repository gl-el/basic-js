const { NotImplementedError } = require('../extensions/index.js');

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
  
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== "[object Date]") throw Error ('Invalid date!');
  if (Object.getOwnPropertyNames(date).length > 0) throw Error ('Invalid date!')
  const dateObj = new Date(date);
  
  const month = dateObj.getMonth();
  switch (true) {
    case (month < 2 || month === 11):
      return 'winter';
    case (month >1 && month < 5):
      return 'spring';
    case (month > 4 && month < 8):
      return 'summer';
    case (month > 7 && month < 11):
      return 'autumn';
  }
}

module.exports = {
  getSeason
};
