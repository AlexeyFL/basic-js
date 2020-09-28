const CustomError = require("../extensions/custom-error");

const chainMaker = {
	arr: [],

	result: '',
  
  str: '',
  
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.result = `( ${value} )`;
    this.arr.push(this.result);
  	return this;
  },
  removeLink(position) {
  let delNum = position - 1;
    
  	if(delNum < 0 || delNum > this.arr.length){
      throw Error('THROWN');
    }
    this.arr.splice(delNum, 1);
    return this;
  },
  reverseChain() {
    this.str = this.arr.reverse();
    return this;
  },
  finishChain() {
    this.str = this.arr.join('~~')
    return this.str;
  }
};

module.exports = chainMaker;
