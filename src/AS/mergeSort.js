// Merge Sort

// Approach 1: Top-Down (Recursive)
// Concept: Divide and Conquer — recursively split the array into two halves
//          until each half has 1 element (already sorted), then merge them
//          back together in sorted order. Like splitting a deck of cards in
//          half repeatedly, then merging pairs back in order.
// Time Complexity:  O(n log n) — log n levels of splitting, O(n) merge at each level
// Space Complexity: O(n)       — extra arrays created during merge + O(log n) call stack
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]

// Approach 2: Bottom-Up (Iterative)
// Concept: Instead of splitting top-down, start by treating each element as
//          a sorted subarray of size 1. Then iteratively merge adjacent pairs
//          of size 1 → 2 → 4 → 8 ... until the whole array is sorted.
//          Avoids recursion stack entirely.
// Time Complexity:  O(n log n) — same as recursive
// Space Complexity: O(n)       — temp array for merging, no call stack overhead
function mergeSortBottomUp(arr) {
  let n = arr.length;
  let result = arr.slice();

  for (let size = 1; size < n; size *= 2) {
    for (let lo = 0; lo < n; lo += size * 2) {
      let mid = Math.min(lo + size, n);
      let hi = Math.min(lo + size * 2, n);
      let merged = merge(result.slice(lo, mid), result.slice(mid, hi));
      for (let k = 0; k < merged.length; k++) {
        result[lo + k] = merged[k];
      }
    }
  }

  return result;
}

console.log(mergeSortBottomUp([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]

function countInversions(arr) {
  let count = 0;

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }

  function merge(left, right) {
    let res = [],
      i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        res.push(left[i++]);
      } else {
        count += left.length - i; // 🔥 main trick
        res.push(right[j++]);
      }
    }

    return [...res, ...left.slice(i), ...right.slice(j)];
  }

  mergeSort(arr);
  return count;
}
