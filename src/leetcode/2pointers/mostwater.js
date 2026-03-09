// Given an array height of length n, where each element represents the height of a vertical line drawn at that index, find two lines that together with the x-axis form a container that holds the most water.

// LeetCode 11 - Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

// Two Pointers approach: O(n) time, O(1) space
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const water = width * minHeight;
    maxWater = Math.max(maxWater, water);

    // Move the pointer with the smaller height inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Examples
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
