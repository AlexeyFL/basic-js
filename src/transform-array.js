const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  const discardPrev = '--discard-prev';
  const discardNext = '--discard-next';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  let copy = [];

  if (!arr instanceof Array) {
    throw Error('THROWN');
  }

  if(
    arr.indexOf(discardPrev) === -1 ||
    arr.indexOf(discardNext) === -1 ||
    arr.indexOf(doubleNext) === -1 ||
    arr.indexOf(doublePrev) === -1
  
  ){
    return arr;
  }

  if (!arr.length) {
    return [];
  }
  
  function checkFirstLast(item, arr){
  	if(arr.indexOf(item) === 0 || arr.indexOf(item) === arr.length -1){
    	return true;
    }
  }

  if(
    checkFirstLast(discardPrev, arr) ||
    checkFirstLast(discardNext, arr) ||
    checkFirstLast(doubleNext, arr) ||
    checkFirstLast(doublePrev, arr)
  ){
    return arr;
  }

  // if discard next
  if (arr.indexOf(discardNext) !== -1) {
    let idx = arr.indexOf(discardNext);
    if(checkFirstLast(discardNext, arr)){
      return;
    }
    copy = arr.filter((item, index) => {
      return index !== idx && index !== idx + 1;
    });
  }


  // if discard prev
  if (arr.indexOf(discardPrev) !== -1) {
    let idx = arr.indexOf(discardPrev);
    if(checkFirstLast(discardNext, arr)){
      return;
    }
    copy = arr.filter((item, index) => {
      return index !== idx && index !== idx - 1;
    });
  }
  
  //if double next
  if (arr.indexOf(doubleNext) !== -1) {
    let idx;
    if(checkFirstLast(doubleNext, arr)){
      return;
    }
    copy = arr.slice();
    
    if(copy.indexOf(doubleNext) !== -1){
      copy.splice(copy.indexOf(doubleNext), 0, copy[copy.indexOf(doubleNext) + 1]);
      idx = copy.indexOf(doubleNext);
    }
   
    copy = copy.filter((item, index) => {
      return index !== idx;
    });
  }
  
  //if double prev
  if (arr.indexOf(doublePrev) !== -1) {
    let idx;
    if(checkFirstLast(doublePrev, arr)){
      return;
    }
    copy = arr.slice();
    
    if(copy.indexOf(doublePrev) !== -1){
      copy.splice(copy.indexOf(doublePrev), 0, copy[copy.indexOf(doublePrev) - 1]);
      idx = copy.indexOf(doublePrev);
    }
   
    copy = copy.filter((item, index) => {
      return index !== idx;
    });
  }
};
