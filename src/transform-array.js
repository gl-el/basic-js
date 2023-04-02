const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) && arr.length === 0) return arr;
  if (!Array.isArray(arr)) throw Error("\'arr\' parameter must be an instance of the Array!");
  const output = [...arr];
  for (let i = 0; i < output.length; i++) {
    if (output[i] === '--double-prev') {
      (i - 1 >= 0) ? output.splice(i, 1, output[i-1]) : output.splice(i, 1);
    }
    if (output[i] === '--discard-next') {
      output.splice(i, 2);
      i++;
    }
    if (output[i] === '--discard-prev') {
      (i - 1 >= 0) ? output.splice(i - 1, 2) : output.splice(i, 1);
    }
    if (output[i] === '--double-next') {
      (i > output.length - 2) ? output.splice(i, 1) : output.splice(i, 1, output[i + 1]);
    }
    
  }
  return output.filter(item => (item !== '--double-prev' && item !== '--discard-prev'))
}

module.exports = {
  transform
};
