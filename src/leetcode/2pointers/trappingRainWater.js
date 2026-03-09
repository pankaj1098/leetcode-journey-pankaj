// LeetCode 42 - Trapping Rain Water
// Given n non-negative integers representing an elevation map,
// compute how much water it can trap after raining.

// Two Pointers approach: O(n) time, O(1) space
function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]; // update max, no water trapped
      } else {
        water += leftMax - height[left]; // water above current bar
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]; // update max, no water trapped
      } else {
        water += rightMax - height[right]; // water above current bar
      }
      right--;
    }
  }

  return water;
}

// Examples
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5]));                     // 9
console.log(trap([3, 0, 2, 0, 4]));                        // 7
