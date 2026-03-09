// LeetCode 167 - Two Sum II (Input Array Is Sorted)
// Given a 1-indexed sorted array, find two numbers that add up to target.
// Return their indices as [index1, index2] (1-indexed).

// Two Pointers approach: O(n) time, O(1) space
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1]; // 1-indexed
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return []; // guaranteed to have a solution per problem constraints
}

// Examples
console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1)); // [1, 2]
