const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrDigits = n.toString().split('');
 //console.debug('arr',arrDigits);
  for (let i = 0; i < arrDigits.length - 1; i++) {
   // console.debug('digit',arrDigits[i]);
    if (Number(arrDigits[i]) < Number(arrDigits[i+1])) {
      arrDigits.splice(i, 1);
      return Number(arrDigits.join(''));
    }    
  }
  arrDigits.splice(arrDigits.length - 1, 1);
  return Number(arrDigits.join(''))
}

module.exports = {
  deleteDigit
};
