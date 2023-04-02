const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    (value === undefined) ? this.chain.push('( )') : this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finished = this.chain.join('~~');
    this.chain = [];
    return finished;
  }
};

module.exports = {
  chainMaker
};
