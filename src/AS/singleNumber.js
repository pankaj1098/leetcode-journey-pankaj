// LeetCode #136 - Single Number
// Approach 1: Hash Map (Frequency Count)
// Concept: Count occurrences of each number in a hash map.
//          Then scan again to find the number with frequency 1.
//          Every duplicate appears exactly twice, so the unique one has count = 1.
// Time Complexity:  O(n) — two passes through the array
// Space Complexity: O(n) — hash map stores up to n/2 + 1 distinct numbers
var singleNumber = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) return nums[i];
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));

// Approach 2: XOR Bit Manipulation (optimal)
// Concept: XOR has two key properties:
//          - a ^ a = 0  (same number cancels out)
//          - a ^ 0 = a  (zero is identity)
//          So XOR-ing all numbers causes every duplicate pair to cancel to 0,
//          leaving only the unique number. Order doesn't matter.
// Example:  4 ^ 1 ^ 2 ^ 1 ^ 2  →  4 ^ (1^1) ^ (2^2)  →  4 ^ 0 ^ 0  →  4
// Time Complexity:  O(n) — single pass
// Space Complexity: O(1) — only one variable used
var singleNumber1 = function (nums) {
  let ans = 0;
  for (let n of nums) {
    ans ^= n;
  }
  return ans;
};

console.log(singleNumber1([4, 1, 2, 1, 2]));
