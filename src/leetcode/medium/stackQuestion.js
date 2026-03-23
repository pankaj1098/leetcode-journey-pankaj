/**
 * LC#1441 - Build an Array With Stack Operations
 * https://leetcode.com/problems/build-an-array-with-stack-operations/
 *
 * Approach: Simulate stack — O(n)
 * Iterate 1..n, always Push. If current number is NOT in target, also Pop.
 * Stop once we've matched all elements in target.
 * Time: O(n) | Space: O(1) excluding output
 */

var buildArray = function (target, n) {
  const result = [];
  let targetIndex = 0;

  for (let i = 1; i <= n && targetIndex < target.length; i++) {
    result.push("Push");

    if (target[targetIndex] !== i) {
      // Not the number we need — pop it
      result.push("Pop");
    } else {
      targetIndex++;
    }
  }

  return result;
};

// Tests
console.log(buildArray([1, 3], 3));       // ["Push","Push","Pop","Push"]
console.log(buildArray([1, 2, 3], 3));    // ["Push","Push","Push"]
console.log(buildArray([1, 2], 4));       // ["Push","Push"]
