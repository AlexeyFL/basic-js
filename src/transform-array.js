const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  const discardPrev = '--discard-prev';
  const discardNext = '--discard-next';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  const regx = /^--/gm;
  let copy = [];
  let operationCount = 0;

  // if not array
  if (!arr instanceof Array) {
    throw Error('THROWN');
  }

  arr.forEach(item => {
    if(typeof item === 'string'){
      operationCount += 1;
    }
  });

  //if not command
  if(!arr.some(item => regx.test(item))){
    return arr;
  }

  // if not arr length
  if (!arr.length) {
    return [];
  }

  // if first or last position
  function checkFirstLast(item, arr){
  	if(arr.indexOf(item) === 0 || arr.indexOf(item) === arr.length -1){
    	return true;
    }
  }

  

  // if discard next
  if (arr.indexOf(discardNext) !== -1) {
    let idx = arr.indexOf(discardNext);

    //if first or last
    if(checkFirstLast(discardNext, arr)){
      copy = arr.filter((item, index, arr) => {
        return arr.indexOf(discardNext) !== index;
      });
      return copy;
    }

    copy = arr.filter((item, index) => {
      return index !== idx && index !== idx + 1;
    });
    return copy;
  }

  // if discard prev
  if (arr.indexOf(discardPrev) !== -1) {
 
    let idx = arr.indexOf(discardPrev);

    //if first or last
    if(checkFirstLast(discardPrev, arr)){
      copy = arr.filter((item, index) => {
        return arr.indexOf(discardPrev) !== index;
      });
      
    }

    copy = arr.filter((item, index) => {
      return index !== idx && index !== idx - 1;
    });
    return copy;
  }
  
  //if double next
  if (arr.indexOf(doubleNext) !== -1) {
    let idx = arr.indexOf(doublePrev);
    
    //if first or last
    if(checkFirstLast(doubleNext, arr)){
      copy = arr.filter((item, index) => {
        return arr.indexOf(doubleNext) !== index;
      });
      return copy;
    }

    copy = arr.slice();
    
    if(copy.indexOf(doubleNext) !== -1){
      copy.splice(copy.indexOf(doubleNext), 0, copy[copy.indexOf(doubleNext) + 1]);
      idx = copy.indexOf(doubleNext);
    }
   
    copy = copy.filter((item, index) => {
      return index !== idx;
    });
    return copy;
  }
  
  //if double prev
  if (arr.indexOf(doublePrev) !== -1) {
    let idx = arr.indexOf(doublePrev);
    
    //if first or last
    if(checkFirstLast(doublePrev, arr)){
      copy = arr.filter((item, index) => {
        return arr.indexOf(doublePrev) !== index;
      });
      return copy;
    }

    copy = arr.slice();
    
    if(copy.indexOf(doublePrev) !== -1){
      copy.splice(copy.indexOf(doublePrev), 0, copy[copy.indexOf(doublePrev) - 1]);
      idx = copy.indexOf(doublePrev);
    }
   
    copy = copy.filter((item, index) => {
      return index !== idx;
    });
    return copy;
  }
  
};
