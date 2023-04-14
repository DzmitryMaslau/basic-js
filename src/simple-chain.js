const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (typeof value == 'function') {
      value = new String(value).toString().replace(/ +/, '');
      this.arr.push(value);
    } else {
      this.arr.push(value);
    }
      return this;
  },

  removeLink(position) {
     if (typeof position === 'number' && position < this.arr.length && position > 0) {
       this.arr.splice(position-1, 1);
       return this;
     }
       else {
         this.arr = [];
         throw new Error('Error');
     }
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let newStr = this.arr.reduce((str, item) => str +'( ' + new String(item).toString() + ' )~~', '');
    console.log(newStr.substring(0, newStr.length - 2));
    this.arr = [];
    return newStr.substring(0, newStr.length - 2);
  }
};
module.exports = {
  chainMaker
};
