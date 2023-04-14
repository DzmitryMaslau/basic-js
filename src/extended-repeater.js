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
  const ourStr = String(str);
  const addition = (options.addition !== undefined) ? String(options.addition) : '';
  const separator = (options.separator !== undefined) ? options.separator : '+';
  const additionSeparator = (options.additionSeparator !== undefined) ? options.additionSeparator : '|';
  const repeatTimes = (Number.isInteger(options.repeatTimes) && options.repeatTimes > 0) ? options.repeatTimes : 1;
  const additionRepeatTimes = (Number.isInteger(options.additionRepeatTimes) && options.additionRepeatTimes > 0) ? options.additionRepeatTimes : 1;

  let additionalArr = [];

  for (let i = 1; i <= additionRepeatTimes; i++) {
    additionalArr.push(addition);
  }

  let additional = additionalArr.join(options.additionSeparator);
  let resultBasis = [];

  for (let i = 1; i <= repeatTimes; i++) {
    resultBasis.push(ourStr + additional);
  }

  result = resultBasis.join(separator);

  return result;
};


module.exports = {
  repeater
};
