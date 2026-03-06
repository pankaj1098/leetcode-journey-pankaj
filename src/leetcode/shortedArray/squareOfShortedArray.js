function squareOfSortedArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  const result = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      result[i] = arr[left] * arr[left];
      left++;
    } else {
      result[i] = arr[right] * arr[right];
      right--;
    }
  }

  return result;
}

console.log(squareOfSortedArray([-4, -1, 0, 3, 10]));
