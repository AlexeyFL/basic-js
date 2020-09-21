const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(!Array.isArray(arr)){
    return false;
  }
  const copy = [];
	arr.forEach(item => {
  	if(typeof item !== 'string'){
    	return false;
    }
    copy.push(item.replace(/ /g, '')[0].toUpperCase());
  })
  
  return copy.sort().join('');
};
