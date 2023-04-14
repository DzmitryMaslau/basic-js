const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
      let a = [];
      if (!(Array.isArray(array) && (typeof array === 'object'))) {
        return 0;
      }
      if (array === []) {
        return 1
      }

      let filter = array.filter(el => Array.isArray(el) && (typeof el === 'object'));
      if (filter.length === 0) {
        return 1;
      }

      for (let i = 0; i < filter.length; i++) {
        a.push(this.calculateDepth(filter[i]) + 1);
      }
      return Math.max(...a);
  }
};
module.exports = {
  DepthCalculator
};
