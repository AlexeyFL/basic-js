const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	
  maxDepth = 0;
  calculateDepth(arr) {
    
  	if(arr instanceof Array){
    	for(let i=0; i<arr.length; i++){
         
            this.calculateDepth(arr[i])
            
      }
      this.maxDepth +=1
    }
    return this.maxDepth;
  }
  
};