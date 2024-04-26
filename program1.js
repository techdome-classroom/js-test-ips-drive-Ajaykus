
    function smallestMissingPositiveInteger(nums) {


    // Implement the function smallest_missing_positive_integer
    function smallestMissingPositiveInteger(nums) {
      const positiveNums = nums.filter(num => num > 0);
      positiveNums.sort((a, b) => a - b);
    
      let smallestMissing = 1;
      for (let i = 0; i < positiveNums.length; i++) {
          if (positiveNums[i] === smallestMissing) {
              smallestMissing++;
          } else if (positiveNums[i] > smallestMissing) {
              return smallestMissing;
          }
      }
    
      return smallestMissing;
    }
    
    module.exports = smallestMissingPositiveInteger
  }
  
  module.exports = smallestMissingPositiveInteger;




    // Implement the function smallest_missing_positive_integer
  
  }
  
  module.exports = smallestMissingPositiveInteger;

