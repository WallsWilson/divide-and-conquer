function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1; 

  while(left <= right) {
    let mid = Math.floor((left + right)/ 2);

    if (mid === 0 || arr[mid] < arr[mid -1]) {
        return mid;
    }
    if(arr[mid] > arr[right]) {
        left = mid + 1;
    }else {
        right = mid - 1;
    }
  }
  return 0;
}

module.exports = findRotationCount