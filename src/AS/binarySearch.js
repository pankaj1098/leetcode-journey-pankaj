// LeetCode #704 - Binary Search

// Approach 1: Iterative
// Concept: Repeatedly halve the search space by comparing the middle element
//          with the target. If mid == target, return index. If target is greater,
//          search right half; if smaller, search left half. Stop when lo > hi.
// Time Complexity:  O(log n) — search space halves each iteration
// Space Complexity: O(1)     — no extra space
function binarySearch(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4

// Approach 2: Recursive
// Concept: Same divide-and-conquer logic as iterative but uses the call stack
//          to track the current search boundaries instead of a loop.
// Time Complexity:  O(log n) — halves search space each call
// Space Complexity: O(log n) — recursive call stack depth
function binarySearchRecursive(nums, target, lo = 0, hi = nums.length - 1) {
  if (lo > hi) return -1;
  let mid = Math.floor((lo + hi) / 2);
  if (nums[mid] === target) return mid;
  else if (nums[mid] < target) return binarySearchRecursive(nums, target, mid + 1, hi);
  else return binarySearchRecursive(nums, target, lo, mid - 1);
}

console.log(binarySearchRecursive([-1, 0, 3, 5, 9, 12], 9)); // 4
