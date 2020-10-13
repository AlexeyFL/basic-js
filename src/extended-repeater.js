const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {

  
	let rept = options.repeatTimes;
	let add = options.addition;
  let sep = options.separator || "+";
  let addRepeatTime = options.additionRepeatTimes;
  let addSeparator = options.additionSeparator || '|';

  let copyStr = '';

  copyStr += str;

  function additionRepeatTimes(repeatTime, str, separator){
    let arr = [];
    for(let i = 0; i < repeatTime; i++){
      arr.push(str)
    }
    console.log(arr)
    return arr.join(separator);
  }

  
  copyStr += additionRepeatTimes(addRepeatTime, add, addSeparator);

  return copyStr = additionRepeatTimes(rept, copyStr, sep);

};