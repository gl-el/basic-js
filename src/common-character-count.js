const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let biggerStr = s1;
  let smallerStr = s2;
  if (s1.length < s2.length) {biggerStr = s2; smallerStr = s1};
  let counter = 0;
  for (let i = 0; i < biggerStr.length; i++) {
    if (smallerStr.includes(biggerStr[i])) {
      //console.debug('big i',biggerStr[i])
      counter ++;
      smallerStr = smallerStr.replace(`${biggerStr[i]}`, '');
     // console.debug(smallerStr)
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
