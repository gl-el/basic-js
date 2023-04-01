const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = `${str}`;
  let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator, resultStr = [];
  Object.hasOwn(options, 'repeatTimes') ? repeatTimes = options.repeatTimes : repeatTimes = 1;
  Object.hasOwn(options, 'separator') ? separator = options.separator : separator = '+';
  if (Object.hasOwn(options, 'addition')) {
    addition = `${options.addition}`;
    str += addition;
  }

  if (Object.hasOwn(options, 'additionRepeatTimes')) {
    additionRepeatTimes = options.additionRepeatTimes;
    const strAdd= [str];
    Object.hasOwn(options, 'additionSeparator') ? additionSeparator = options.additionSeparator : additionSeparator = '|';
    for (let i=1; i < additionRepeatTimes; i++) {
      strAdd.push(addition);
    }
    str = strAdd.join(`${additionSeparator}`);
  } 


  for (let i=0; i<repeatTimes; i++) {
    resultStr.push(str);
  }
  return resultStr.join(`${separator}`);
}

module.exports = {
  repeater
};
