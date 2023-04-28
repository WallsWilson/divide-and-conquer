function sortedFrequency(arr, num) {
    let leftInx = 0;
    let rightIdx = arr.length-1;
    let firstZeroIdx = -1;
  
    while(leftInx <= rightIdx) {
      let middleIdx = Math.floor((leftInx + rightIdx) /2 );
      
  
      if(arr[mid] === num) {
          firstZeroIdx = middleIdx;
          rightIdx = middleIdx -1;
      } else {
          leftInx = middleIdx +1;
      }
    }
    return arr.length - firstZeroIdx -1;
  }
  

module.exports = sortedFrequency