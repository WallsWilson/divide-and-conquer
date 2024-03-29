function findRotatedIndex(arr, num) {
        let pivot = findPivot(arr);
        
        if (pivot === 0 || num < arr[0]) {
          return binarySearch(arr, pivot, arr.length - 1, num);
        } else {
          return binarySearch(arr, 0, pivot - 1, num);
        }
      }
      
      function findPivot(arr) {
        let left = 0;
        let right = arr.length - 1;
        
        while (left < right) {
          const mid = Math.floor((left + right) / 2);
          
          if (arr[mid] > arr[right]) {
            left = mid + 1;
          } else {
            right = mid;
          }
        }
        
        return left;
      }
      
      function binarySearch(arr, left, right, num) {
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          
          if (arr[mid] === num) {
            return mid;
          } else if (arr[mid] < num) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        
        return -1;
      }

module.exports = findRotatedIndex