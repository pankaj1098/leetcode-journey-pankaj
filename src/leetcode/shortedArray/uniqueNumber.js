// Method 1 XOR approach

function findUnique(arr) {
  let result = 0;

  for (let num of arr) {
    result ^= num;
  }

  return result;
}
console.log(findUnique([1, 1, 2, 2, 3, 4, 4, 5, 5]));

// Method 2 Linear Scan

function findUniqueBylinearApproach(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
}

console.log(findUniqueBylinearApproach([1, 1, 2, 2, 3, 4, 4, 5, 5]));

function findUniqueByBinary(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid % 2 === 1) mid--;

    if (arr[mid] === arr[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }

  return arr[left];
}

console.log(findUniqueByBinary([1, 1, 2, 2, 3, 4, 4, 5, 5]));
