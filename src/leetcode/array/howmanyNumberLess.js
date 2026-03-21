/**
 * LC#1365 - How Many Numbers Are Smaller Than the Current Number
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 *
 * Approach 1: Brute Force — O(n²)
 * Approach 2: Sort + Object map — O(n log n)
 * Approach 3: Sort + Map — O(n log n)
 */

// Approach 1: Brute Force
// For each element, compare against every other element and count smaller ones
// Time: O(n²) | Space: O(1) excluding output
var smallerNumbersThanCurrent = function (nums) {
  // let res = []
  // for (let i = 0; i < nums.length; i++) {
  //     let count = 0;
  //     for (let j = 0; j < nums.length; j++) {

  //        if (i !== j && nums[j] < nums[i]) {
  //             count++;
  //         }

  //     }
  //     res.push(count)
  // }
  // return res;

  // Approach 2: Sort + Object map
  // After sorting, first occurrence index of a value = count of smaller elements
  // Time: O(n log n) | Space: O(n)
  const short = [...nums].sort((a, b) => a - b);

  let map = {};

  for (let i = 0; i < short.length; i++) {
    if (map[short[i]] == undefined) {
      map[short[i]] = i;
    }
  }

  return nums.map((num) => map[num]);
};

// Approach 3: Sort + Map (ES6 Map)
// Same logic as Approach 2 but uses Map instead of plain object
// Time: O(n log n) | Space: O(n)
var smallerNumbersThanCurrentMap = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const countMap = new Map();
  for (let i = 0; i < sorted.length; i++) {
    if (!countMap.has(sorted[i])) {
      countMap.set(sorted[i], i);
    }
  }
  return nums.map((n) => countMap.get(n));
};

// Tests
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));     // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));     // [0,0,0,0]
