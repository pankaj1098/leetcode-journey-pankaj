// Bubble Sort

// Approach 1: Basic Bubble Sort
// Concept: Repeatedly compare adjacent elements and swap if out of order.
//          Each full pass "bubbles" the largest unsorted element to its correct
//          position at the end. Repeat n-1 times for n elements.
// Time Complexity:  O(n²) — nested loops, always runs all passes
// Space Complexity: O(1)  — in-place sorting
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [11,12,22,25,34,64,90]

// Approach 2: Optimized Bubble Sort (Early Exit)
// Concept: Same as basic but tracks if any swap happened in a pass.
//          If no swaps occur, the array is already sorted — stop early.
//          Best case is O(n) for an already sorted array.
// Time Complexity:  O(n²) worst/avg, O(n) best (already sorted)
// Space Complexity: O(1)  — in-place sorting
function bubbleSortOptimized(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSortOptimized([64, 34, 25, 12, 22, 11, 90])); // [11,12,22,25,34,64,90]

// You are given an array of integers.
// Instead of fully sorting it, detect the first index where Bubble Sort would perform a swap in the first pass.

function firstUnsortedIndex(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 2, 5, 3, 4];

console.log(firstUnsortedIndex(arr));
