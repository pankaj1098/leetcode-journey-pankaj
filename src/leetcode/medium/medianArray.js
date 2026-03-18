// LeetCode #4 - Median of Two Sorted Arrays

// Approach 1: Merge then Find Median
// Concept: Merge both sorted arrays into one sorted array using two pointers
//          (like merge step of Merge Sort), then pick the middle element(s).
//          Simple and intuitive but doesn't meet the O(log(m+n)) constraint.
// Time Complexity:  O(m + n) — merge takes one pass through both arrays
// Space Complexity: O(m + n) — extra array to hold merged result
function findMedianSortedArrays(nums1, nums2) {
  let merged = [];
  let i = 0, j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) merged.push(nums1[i++]);
    else merged.push(nums2[j++]);
  }
  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  let mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  }
  return merged[mid];
}

console.log(findMedianSortedArrays([1, 3], [2]));       // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4]));    // 2.5

// Approach 2: Binary Search (Optimal)
// Concept: Binary search on the smaller array to find the correct partition point
//          such that all elements on the left half (across both arrays) are <=
//          all elements on the right half. The median sits at this partition.
//
//          Partition both arrays so that:
//            left side  = maxLeft1, maxLeft2
//            right side = minRight1, minRight2
//          Valid partition when: maxLeft1 <= minRight2 && maxLeft2 <= minRight1
//
// Time Complexity:  O(log(min(m, n))) — binary search on the smaller array only
// Space Complexity: O(1)              — no extra space used
function findMedianSortedArraysBinarySearch(nums1, nums2) {
  // ensure nums1 is the smaller array
  if (nums1.length > nums2.length) return findMedianSortedArraysBinarySearch(nums2, nums1);

  let m = nums1.length, n = nums2.length;
  let lo = 0, hi = m;
  let totalLeft = Math.floor((m + n + 1) / 2);

  while (lo <= hi) {
    let cut1 = Math.floor((lo + hi) / 2); // partition in nums1
    let cut2 = totalLeft - cut1;           // partition in nums2

    let maxLeft1  = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
    let minRight1 = cut1 === m ?  Infinity : nums1[cut1];
    let maxLeft2  = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
    let minRight2 = cut2 === n ?  Infinity : nums2[cut2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      // correct partition found
      if ((m + n) % 2 === 1) return Math.max(maxLeft1, maxLeft2);
      return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
    } else if (maxLeft1 > minRight2) {
      hi = cut1 - 1; // move partition left in nums1
    } else {
      lo = cut1 + 1; // move partition right in nums1
    }
  }
}

console.log(findMedianSortedArraysBinarySearch([1, 3], [2]));    // 2.0
console.log(findMedianSortedArraysBinarySearch([1, 2], [3, 4])); // 2.5
